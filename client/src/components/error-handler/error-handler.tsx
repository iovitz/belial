import { IOInstance } from '@/common/io'
import logger from '@/common/logger'
import { Snackbar } from '@mui/joy'
import { AxiosError } from 'axios'
import { get } from 'lodash'
import React, { ErrorInfo, ReactElement } from 'react'
interface ErrorHandlerProp {
  children: ReactElement
}
interface ErrorHanlderState {
  errorTipText: string
}
export default class ErrorHandler extends React.PureComponent<ErrorHandlerProp, ErrorHanlderState> {
  constructor(props: ErrorHandlerProp) {
    super(props)
    this.state = {
      errorTipText: '',
    }
  }

  ioErrorHandler = (e: AxiosError) => {
    this.setState({
      errorTipText: get(e, 'response.data.msg') ?? '',
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
    return (
      <>
        {this.props.children || null}

        <Snackbar
          autoHideDuration={1500}
          open={Boolean(this.state.errorTipText)}
          color='danger'
          variant='soft'
          onClose={() => {
            this.setState({
              errorTipText: '',
            })
          }}>
          {this.state.errorTipText}
        </Snackbar>
      </>
    )
  }
}
