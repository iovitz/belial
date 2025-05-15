import { inject } from '@adonisjs/core'
import server from '@adonisjs/core/services/server'
import { DefaultEventsMap, Server, Socket } from 'socket.io'
import { TracerService } from './tracer_service.js'

interface SocketConnection extends Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, {
  userId: string
}> {
  tracer: TracerService
}

@inject()
export class SocketService {
  static io: Server
  static booted = false
  static getNumberOfMembers() {
    return this.io.sockets.sockets.size
  }

  constructor(private tracer: TracerService) {}

  boot() {
    if (SocketService.booted) {
      return
    }
    SocketService.booted = true
    SocketService.io = new Server(server.getNodeServer(), {
      cors: {
        origin: '*',
      },
    })

    SocketService.io.on('connection', (_socket) => {
      const socket = _socket as SocketConnection
      socket.tracer = this.tracer.child(`socket-${socket.id}`)
      socket.tracer.info('Socket Connected!', {
        connected: SocketService.getNumberOfMembers(),
      })
      this.bindSocketEvent(socket)
    })
  }

  bindSocketEvent(socket: SocketConnection) {
    socket.on('disconnect', this.handleSocketConnection)
    socket.on('join_group', this.handleJoinGroup)
    socket.on('private_message', this.handlePrivateMessage)
    socket.on('group_message', this.handleGroupMessage)
  }

  handleJoinGroup(this: SocketConnection, data: {
    groupId: string
  }) {
    this.tracer.info('入群', data.groupId)
    this.join(data.groupId)
  }

  handleGroupMessage(this: SocketConnection, data: {
    message: string
    groupId: string
  }) {
    this.tracer.info('群聊消息', data)
    this.to(data.groupId).emit('group_message', {
      message: data.message,
    })
  }

  handlePrivateMessage(this: SocketConnection, ...args: any) {
    this.tracer.info('私聊消息', args)
  }

  handleSocketConnection(this: SocketConnection, reason: string) {
    this.tracer.info(`Socket链接断开: ${reason}`, {
      connected: SocketService.getNumberOfMembers(),
    })
  }
}
