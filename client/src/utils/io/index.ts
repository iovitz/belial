import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Socket } from './socket'
import { IOConfig } from './types'
import { InferParamaters } from '@/types'

export class IO {
  socket: Socket
  axios: AxiosInstance

  constructor(config: IOConfig) {
    const { socketConfig } = config
    this.socket = new Socket(socketConfig.socketUrl, socketConfig.socketPath, socketConfig.socketAuth)
    this.axios = axios.create(config)
    this.addInterceptors()
  }

  private addInterceptors() {
    this.axios.interceptors.response.use((res: AxiosResponse) => {
      return res.data
    })
  }

  request<R>(config: AxiosRequestConfig) {
    return this.axios.request<R>(config)
  }

  onMessage(...args: InferParamaters<typeof this.socket.connection.on>) {
    this.socket.connection.on(...args)
  }

  sendMessage(...args: InferParamaters<typeof this.socket.connection.off>) {
    this.socket.connection.off(...args)
  }

  watch() {
    this.socket.connect()
  }

  unwatch() {
    this.socket.disconnect()
  }
}

export const IOWrap = new IO({
  socketConfig: {
    socketUrl: 'localhost:4321',
    socketPath: '/socket.io',
    socketAuth: 'awefawfe',
  },
})
