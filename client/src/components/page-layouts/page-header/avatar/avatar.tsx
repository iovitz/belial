import { Avatar, Modal } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.less'
import { UserOutlined } from '@ant-design/icons'

export default function UserAvatar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  // const title = {
  //   login: 'Login To Your Account',
  //   register: 'Create Your Account',
  // }
  function handleAvatarClick() {
    setIsLoginModalOpen(true)
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <Modal title='Login To Your Account' open={isLoginModalOpen} footer={null} onCancel={handleCloseLoginModal}>
        /awef
      </Modal>
      <Avatar className={styles['header-avatar']} icon={<UserOutlined />} onClick={handleAvatarClick} />
    </>
  )
}
