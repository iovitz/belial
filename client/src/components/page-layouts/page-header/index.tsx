import React from 'react'
import { Input, Layout, theme } from 'antd'
import styles from './styles.module.less'
import { NotificationOutlined, VideoCameraAddOutlined } from '@ant-design/icons'
import UserAvatar from './avatar/avatar'
import { useNavigate } from 'react-router-dom'
import NotifyIcon from './header-icons/notify-icon'
import UplaodIcon from './header-icons/upload-icon'

const { Header } = Layout

const PageHeader: React.FC = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken()
  const navigate = useNavigate()

  const handleGoHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <Header style={{ background: colorBgContainer, borderBottom: `1px solid ${colorBorder}` }}>
        <div className={styles['header-wrapper']}>
          <div className={styles['header-logo']} onClick={handleGoHomePage}>
            TouYube
          </div>
          <div>
            <Input placeholder='Search' style={{ width: '300px' }} />
          </div>
          <div className={styles['header-right']}>
            <UplaodIcon />
            <NotifyIcon />
            <UserAvatar />
          </div>
        </div>
      </Header>
    </>
  )
}

export default PageHeader
