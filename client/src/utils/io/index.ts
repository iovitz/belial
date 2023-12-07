import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Socket } from '../socket'
import { IOConfig } from './types'

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

  onMessage() {
    //
  }

  sendMessage() {
    //
  }

  watch() {
    //
  }

  unwatch() {
    //
  }
}
