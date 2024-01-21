import { NotificationOutlined } from '@ant-design/icons'
import styles from './styles.module.less'
import React, { useState } from 'react'
import { Drawer, Modal } from 'antd'

export default function NotifyIcon() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleClick = () => {
    setDrawerOpen(true)
  }

  const onClose = () => {
    setDrawerOpen(false)
  }
  return (
    <div className={styles['header-icon']}>
      <NotificationOutlined onClick={handleClick} />
      <Drawer title='Messages' onClose={onClose} open={drawerOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}
