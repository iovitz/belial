import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Socket } from './socket'
import { IOConfig } from './types'
import { InferParamaters } from '@/types'

export class IO {
  socket: Socket
  axios: AxiosInstance

  errorHandler = new Set<(err: AxiosError) => void>()

  constructor(config: IOConfig) {
    const { socketConfig } = config
    this.socket = new Socket(socketConfig.socketUrl, socketConfig.socketPath, socketConfig.socketAuth)
    this.axios = axios.create(config)
    this.addInterceptors()
  }

  public addErrorHandler(handler: (err: AxiosError) => void) {
    this.errorHandler.add(handler)
  }

  public removeErrorHandler(handler: (err: AxiosError) => void) {
    this.errorHandler.delete(handler)
  }

  private addInterceptors() {
    this.axios.interceptors.response.use((res: AxiosResponse) => {
      return res.data
    })
  }

  request<R = unknown>(config: AxiosRequestConfig<R>) {
    return this.axios.request<R>(config).catch((e: AxiosError) => {
      this.errorHandler.forEach((fn) => fn(e))
      throw e
    })
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

export const IOInstance = new IO({
  socketConfig: {
    socketUrl: process.env.REACT_APP_SOCKET_URL!,
    socketPath: process.env.REACT_APP_SOCKET_PATH!,
    socketAuth: 'awefawfe',
  },
  baseURL: process.env.REACT_APP_REQUEST_BASE_URL,
  timeout: Number(process.env.REACT_APP_REQUEST_TIMEOUT),
})
