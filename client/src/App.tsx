import React, { useEffect } from 'react'
import PageLayout from '@/components/page-layouts/page-layout'
import RouterElements from './pages'
import ErrorHandler from './components/error-handler/error-handler'
import { Box } from '@chakra-ui/react'
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
    <Box h='100%'>
      <ErrorHandler>
        <>
          <PageLayout>
            <RouterElements />
          </PageLayout>
        </>
      </ErrorHandler>
    </Box>
  )
}

export default App
