import { SocketService } from '#services/socket_service'
import app from '@adonisjs/core/services/app'

app.ready(async () => {
  const socket = await app.container.make(SocketService)
  socket.boot()
})
