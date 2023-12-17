import React, { useEffect } from 'react'
import PageLayout from '@/components/page-layouts'
import RouterElements from './pages'
import ErrorHandler from './components/error-handler'
import ToastManager from './components/toast'
import { IOWrap } from './utils/io'
import { theme } from 'antd'

const App: React.FC = () => {
  const {
    token: { colorText },
  } = theme.useToken()
  useEffect(() => {
    IOWrap.watch()
  }, [])
  return (
    <div style={{ color: colorText, height: '100%' }}>
      <ErrorHandler>
        <>
          <ToastManager />
          <PageLayout>
            <RouterElements />
          </PageLayout>
        </>
      </ErrorHandler>
    </div>
  )
}

export default App
