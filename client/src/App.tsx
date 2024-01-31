import React, { useEffect } from 'react'
import RouterElements from './pages/routes'
import ErrorHandler from './components/error-handler/error-handler'
import { useTranslation } from 'react-i18next'

const App: React.FC = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.t = t
    return () => {
      console.error('App Unmount')
    }
  }, [])
  return (
    <ErrorHandler>
      <>
        <RouterElements />
      </>
    </ErrorHandler>
  )
}

export default App
