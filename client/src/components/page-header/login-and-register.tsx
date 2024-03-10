import { Box, DialogContent, DialogTitle } from '@mui/joy'
import React, { useState } from 'react'
import LoginForm from './login-form'
import RegisterForm from './register-form'

interface Props {
  closeModal: () => void
}

export default function LoginAndRegister(props: Props) {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <DialogTitle>{isLogin ? '登录' : '注册'}</DialogTitle>
      <DialogContent>{isLogin ? '使用你的邮箱和密码进行登录' : '使用你的常用邮箱注册账号'}</DialogContent>
      {isLogin ? <LoginForm closeModal={props.closeModal} /> : <RegisterForm closeModal={props.closeModal} />}
      <DialogContent
        sx={{
          textAlign: 'center',
        }}>
        <Box
          sx={{
            cursor: 'pointer',
            userSelect: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => setIsLogin(!isLogin)}>
          前往注册
        </Box>
      </DialogContent>
    </>
  )
}
