import React from 'react'
import RouterElements from './pages/routes'
import ErrorHandler from './components/error-handler/error-handler'
import { useGlobalI18n } from './hooks/useGlobalI18n'

const App: React.FC = () => {
  useGlobalI18n()
  return (
    <ErrorHandler>
      <>
        <RouterElements />
      </>
    </ErrorHandler>
  )
}

export default App
