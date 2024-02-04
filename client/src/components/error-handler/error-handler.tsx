import logger from '@/common/logger'
import React, { ErrorInfo, ReactElement } from 'react'
interface ErrorHandlerProp {
  children: ReactElement
}
export default class ErrorHandler extends React.PureComponent<ErrorHandlerProp> {
  constructor(props: ErrorHandlerProp) {
    super(props)
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger.error('!!!React Did Catch', error, info)
  }
  render() {
    return <>{this.props.children || null}</>
  }
}
