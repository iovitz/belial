import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
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
  }

  public addErrorHandler(handler: (err: AxiosError) => void) {
    this.errorHandler.add(handler)
  }

  public removeErrorHandler(handler: (err: AxiosError) => void) {
    this.errorHandler.delete(handler)
  }

  public addResponseInterceptor(interceptor: (res: AxiosResponse) => AxiosResponse<unknown, unknown>) {
    this.axios.interceptors.response.use(interceptor)
  }

  public addRequestInterceptor(
    interceptor: (value: InternalAxiosRequestConfig<unknown>) => InternalAxiosRequestConfig<unknown>,
  ) {
    this.axios.interceptors.request.use(interceptor)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request<R = any>(config: AxiosRequestConfig<unknown>): any {
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
