import React from 'react'
import { Layout } from 'antd'
import PageHeader from './page-header'
import styles from './styles.module.less'

const PageLayout: React.FC<{
  children: JSX.Element
}> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <PageHeader />
      {children}
    </Layout>
  )
}

export default PageLayout
