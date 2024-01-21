import { VideoCameraAddOutlined } from '@ant-design/icons'
import styles from './styles.module.less'
import React, { useState } from 'react'
import { Modal } from 'antd'

export default function UplaodIcon() {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClick = () => {
    setModalOpen(true)
  }

  const handleModelClose = () => {
    setModalOpen(false)
  }
  return (
    <div className={styles['header-icon']}>
      <VideoCameraAddOutlined onClick={handleClick} />
      <Modal title='Upload Video' open={modalOpen} footer={null} onCancel={handleModelClose}></Modal>
    </div>
  )
}
