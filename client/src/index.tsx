import React from 'react'
import CssBaseline from '@mui/joy/CssBaseline'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy/styles'
import App from './App'
import 'normalize.css'
import './style/global.less'
import { BrowserRouter } from 'react-router-dom'
import './i18n/i18n'
import { StoreProvider } from './store'

const root = ReactDOM.createRoot(document.getElementById('__APP_CONTAINER__') as HTMLElement)
root.render(
  <CssVarsProvider disableTransitionOnChange>
    <StoreProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </CssVarsProvider>,
)
