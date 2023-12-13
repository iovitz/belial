import React, { useEffect } from 'react'
import { message } from 'antd'
import { UIEmitter, UIEmitterTypes } from '@/utils/emitter'

const ToastManager: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    function handleToast(options: UIEmitterTypes['SHOW_TOAST']) {
      messageApi.open(options)
    }
    UIEmitter.on('SHOW_TOAST', handleToast)

    return () => {
      UIEmitter.off('SHOW_TOAST', handleToast)
    }
  })

  return <>{contextHolder}</>
}

export default ToastManager
