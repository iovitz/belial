import React from 'react'
import { Layout, theme } from 'antd'
import PageSider from './page-sider'
import PageHeader from './page-header'
import styles from './styles.module.less'

const { Content } = Layout

const PageLayout: React.FC<{
  children: JSX.Element
}> = ({ children }) => {
  const {
    token: { colorText },
  } = theme.useToken()
  return (
    <Layout className={styles.layout}>
      <PageHeader />
      <Content
        style={{
          height: '100%',
        }}>
        <Layout className={styles.content}>
          <PageSider></PageSider>
          <Content>
            <div className={styles['content-wrapper']} style={{ color: colorText }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default PageLayout
