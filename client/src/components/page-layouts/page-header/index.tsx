import React from 'react'
import { Avatar, Input, Layout, theme } from 'antd'
import styles from './styles.module.less'
import { NotificationOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons'

const { Header } = Layout

const PageHeader: React.FC = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken()

  return (
    <Header style={{ background: colorBgContainer, borderBottom: `1px solid ${colorBorder}` }}>
      <div className={styles['header-wrapper']}>
        <div className={styles['header-logo']}>TouYube</div>
        <div>
          <Input placeholder='Search' style={{ width: '300px' }} />
        </div>
        <div className={styles['header-right']}>
          <div className={styles['header-icon']}>
            <VideoCameraAddOutlined />
          </div>
          <div className={styles['header-icon']}>
            <NotificationOutlined />
          </div>
          <Avatar className={styles['header-avatar']} icon={<UserOutlined />} />
        </div>
      </div>
    </Header>
  )
}

export default PageHeader
