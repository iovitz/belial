import type { ArgsProps } from 'antd/es/message/interface'
import Emittery from 'emittery'

export interface UIEmitterTypes {
  SHOW_TOAST: ArgsProps
}
export const UIEmitter = new Emittery<UIEmitterTypes>()
