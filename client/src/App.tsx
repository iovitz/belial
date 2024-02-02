import React from 'react'
import RouterElements from './pages/routes'
import ErrorHandler from './components/error-handler/error-handler'
import { useWindowI18n } from './hooks/useWindowI18n'

const App: React.FC = () => {
  useWindowI18n()
  return (
    <ErrorHandler>
      <>
        <RouterElements />
      </>
    </ErrorHandler>
  )
}

export default App
