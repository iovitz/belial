import React from 'react'
import { Layout } from 'antd'
import PageSider from './page-sider'
import PageHeader from './page-header'
import styles from './styles.module.less'

const { Content } = Layout

const PageLayout: React.FC<{
  children: JSX.Element
}> = ({ children }) => {
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
            <div className={styles['content-wrapper']}>{children}</div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default PageLayout
