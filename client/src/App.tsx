import React, { useEffect } from 'react'
import PageLayout from '@/components/page-layouts'
import RouterElements from './pages'
import ErrorHandler from './components/error-handler'
import ToastManager from './components/toast'
import { IOWrap } from './utils/io'

const App: React.FC = () => {
  useEffect(() => {
    IOWrap.watch()
    console.log(IOWrap)
  }, [])
  return (
    <ErrorHandler>
      <>
        <ToastManager />
        <PageLayout>
          <RouterElements />
        </PageLayout>
      </>
    </ErrorHandler>
  )
}

export default App
