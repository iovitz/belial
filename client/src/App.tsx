import React from 'react'
import PageLayout from '@/components/page-layouts'
import RouterElements from './pages'
import ErrorHandler from './components/error-handler'
import ToastManager from './components/toast'

const App: React.FC = () => {
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
