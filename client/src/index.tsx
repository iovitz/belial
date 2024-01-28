import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigProvider, theme } from 'antd'
import 'normalize.css'
import './style/global.less'
import { BrowserRouter } from 'react-router-dom'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('__APP_CONTAINER__') as HTMLElement)
root.render(
  <ConfigProvider
    theme={
      {
        // algorithm: theme.darkAlgorithm,
      }
    }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
)
