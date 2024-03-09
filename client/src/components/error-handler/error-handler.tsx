import { IOInstance } from '@/common/io'
import { logger } from '@/common/logger'
import { AxiosError } from 'axios'
import { get } from 'lodash'
import React, { ErrorInfo, ReactElement } from 'react'
import { toast } from 'sonner'

interface ErrorHandlerProp {
  children: ReactElement
}
export default class ErrorHandler extends React.PureComponent<ErrorHandlerProp> {
  constructor(props: ErrorHandlerProp) {
    super(props)
  }

  ioErrorHandler = (e: AxiosError) => {
    logger.error('请求失败', e.response)
    toast.error(get(e, 'response.data.msg') ?? '', {
      duration: 1500,
    })
  }

  componentDidMount(): void {
    IOInstance.addErrorHandler(this.ioErrorHandler)
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    IOInstance.removeErrorHandler(this.ioErrorHandler)
    logger.error('!!!React Did Catch', error, info)
  }
  render() {
    return <>{this.props.children || null}</>
  }
}
