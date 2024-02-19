import { Box, Button, FormControl, Input, Stack } from '@mui/joy'
import React from 'react'
import VerifyCode from '../verify-code/verify-code'

export default function LoginForm() {
  return (
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
            required
            placeholder='登录邮箱'
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
            required
            placeholder='登录密码'
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
        <Button type='submit' size='lg'>
          登录
        </Button>
      </Stack>
    </form>
  )
}
