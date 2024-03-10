import { Box, Button, FormControl, Input, Stack } from '@mui/joy'
import React, { useState } from 'react'
import VerifyCode from '../verify-code/verify-code'
import { useRootStore } from '@/store'
import { toast } from 'sonner'

interface Props {
  closeModal: () => void
}

export default function RegisterForm(props: Props) {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vcode, setVcode] = useState('')
  const store = useRootStore()

  async function handleRegister() {
    store.userStore.register(nickname, email, password, vcode).then(() => {
      props.closeModal()
      toast.success('登录成功')
    })
  }
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
              size='lg'
              variant='soft'
              required
              placeholder='选择一个你喜欢的昵称'
              slotProps={{
                input: {
                  minLength: 1,
                  maxLength: 10,
                },
              }}
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
            />
          </FormControl>
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
                  value={vcode}
                  onChange={(event) => setVcode(event.target.value)}
                />
              </Box>
            </Stack>
          </FormControl>
        </Stack>
      </form>
      <Button type='submit' size='lg' onClick={handleRegister}>
        登录
      </Button>
    </>
  )
}
