import PageSider from '@/components/page-sider'
import { Layout, theme } from 'antd'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './home'
import styles from './styles.module.less'

export default function HomeWrapper() {
  const location = useLocation()

  // 处理Index路由
  const isIndex = location.pathname === '/'

  return (
    <>
      <Layout.Content
        style={{
          height: '100%',
        }}>
        <Layout className={styles.content}>
          <PageSider></PageSider>
          <Layout.Content>
            <div className={styles['content-wrapper']}>
              {/* 处理Index路由 */}
              {isIndex ? <Home /> : <Outlet />}
            </div>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </>
  )
}
