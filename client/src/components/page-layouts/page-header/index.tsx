import React from 'react'
import { Layout, theme } from 'antd'

const { Header } = Layout

const PageHeader: React.FC = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken()

  return <Header style={{ background: colorBgContainer, border: `1px solid ${colorBorder}` }}></Header>
}

export default PageHeader
