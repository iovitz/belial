import { Box, Button, FormControl, Input, Stack } from '@mui/joy'
import React from 'react'
import VerifyCode from '../verify-code/verify-code'

export default function RegisterForm() {
  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
        }}>
        <Stack spacing={2}>
          <FormControl>
            <Input
              autoFocus
              type='email'
              size='lg'
              variant='soft'
              required
              placeholder='你的常用邮箱'
              slotProps={{
                input: {
                  minLength: 6,
                  maxLength: 50,
                  pattern: '^([\\w]+)@([\\w]+)\\.([a-zA-Z]{2,4})$',
                },
              }}
            />
          </FormControl>
          <FormControl>
            <Input
              type='password'
              size='lg'
              variant='soft'
              required
              placeholder='方便记忆的密码'
              slotProps={{
                input: {
                  minLength: 6,
                  maxLength: 16,
                },
              }}
            />
          </FormControl>
          <FormControl>
            <Stack spacing={2} direction='row'>
              <VerifyCode />
              <Box width={'50%'}>
                <Input
                  placeholder='验证码'
                  size='lg'
                  required
                  variant='soft'
                  slotProps={{
                    input: {
                      minLength: 4,
                      maxLength: 4,
                    },
                  }}
                />
              </Box>
            </Stack>
          </FormControl>
          <Button type='submit' size='lg' variant='soft'>
            发送邮箱验证码
          </Button>
        </Stack>
      </form>
      <Input
        size='lg'
        variant='soft'
        required
        placeholder='请输入邮箱验证码'
        slotProps={{
          input: {
            minLength: 6,
            maxLength: 16,
          },
        }}
      />
      <Button type='submit' size='lg'>
        登录
      </Button>
    </>
  )
}
