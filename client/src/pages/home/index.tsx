import PageSider from '@/components/page-sider'
import VideoList from '@/components/video-list'
import { Layout, theme } from 'antd'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './styles.module.less'

export default function Index() {
  const {
    token: { colorText },
  } = theme.useToken()

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
            <div className={styles['content-wrapper']} style={{ color: colorText }}>
              {/* 处理Index路由 */}
              {isIndex ? <VideoList /> : <Outlet />}
            </div>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </>
  )
}
