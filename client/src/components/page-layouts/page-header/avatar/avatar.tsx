import { Avatar, Modal } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.less'
import { UserOutlined } from '@ant-design/icons'

export default function UserAvatar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  function handleAvatarClick() {
    setIsLoginModalOpen(true)
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false)
  }
  return (
    <>
      <Modal title='Login / Register' open={isLoginModalOpen} footer={null} onCancel={handleCloseLoginModal}>
        /awef
      </Modal>
      <Avatar className={styles['header-avatar']} icon={<UserOutlined />} onClick={handleAvatarClick} />
    </>
  )
}
