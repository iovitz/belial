import React, { useEffect } from 'react'
import PageLayout from '@/components/page-layouts'
import RouterElements from './pages'
import ErrorHandler from './components/error-handler'
import ToastManager from './components/toast'
import { IOWrap } from './utils/io'
import { theme } from 'antd'
import { useTranslation } from 'react-i18next'
import { utilStyles } from './style'

const App: React.FC = () => {
  const {
    token: { colorText },
  } = theme.useToken()
  useEffect(() => {
    IOWrap.watch()
  }, [])
  const { t } = useTranslation()
  useEffect(() => {
    window.t = t
    return () => {
      console.error('App Unmount')
    }
  }, [])
  return (
    <div className='h-full' style={{ color: colorText }}>
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
