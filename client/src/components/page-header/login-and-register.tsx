import { Box, Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import React, { useState } from 'react'

export default function LoginAndRegister() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <DialogTitle>{isLogin ? '登录' : '注册'}</DialogTitle>
      <DialogContent>{isLogin ? '使用你的邮箱和密码进行登录' : '注册新账号'}</DialogContent>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
        }}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>邮箱</FormLabel>
            <Input autoFocus type='email' required />
          </FormControl>
          <FormControl>
            <FormLabel>密码</FormLabel>
            <Input type='password' required />
          </FormControl>
          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
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
