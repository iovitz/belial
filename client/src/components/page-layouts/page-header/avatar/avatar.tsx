import { Avatar, Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.less'
import { UserOutlined } from '@ant-design/icons'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

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
        <Form labelCol={{ span: 5 }} name='basic' initialValues={{ remember: true }} autoComplete='off'>
          <Form.Item<FieldType>
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <Button type='primary' htmlType='submit' block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Avatar className={styles['header-avatar']} icon={<UserOutlined />} onClick={handleAvatarClick} />
    </>
  )
}
