import { message } from 'antd'

class ToastManager {
  show() {
    message.useMessage()
  }
  hide() {}
}
