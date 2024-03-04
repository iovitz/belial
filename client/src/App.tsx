import React from 'react'
import RouterElements from './pages/routes'
import ErrorHandler from './components/error-handler/error-handler'
import { useGlobalI18n } from './hooks/i18n'
import { Toaster } from 'sonner'
import { useColorScheme } from '@mui/joy'

const App: React.FC = () => {
  useGlobalI18n()
  const { mode } = useColorScheme()
  return (
    <ErrorHandler>
      <>
        <Toaster richColors={true} theme={mode} position='top-center' closeButton={true} />
        <RouterElements />
      </>
    </ErrorHandler>
  )
}

export default App
