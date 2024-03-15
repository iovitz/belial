import { LSUtils } from '../storage/local-storage'
import { IO } from './io'

export const IOInstance = new IO({
  socketConfig: {
    socketUrl: process.env.REACT_APP_SOCKET_URL!,
    socketPath: process.env.REACT_APP_SOCKET_PATH!,
    socketAuth: 'awefawfe',
  },
  baseURL: process.env.REACT_APP_REQUEST_BASE_URL,
  timeout: Number(process.env.REACT_APP_REQUEST_TIMEOUT),
})

// 直接返回响应体
IOInstance.addResponseInterceptor((res) => {
  return res.data.data
})

// 带上Token
IOInstance.addRequestInterceptor((req) => {
  req.headers['authorization'] = LSUtils.getItem('__TOKEN__')
  return req
})
