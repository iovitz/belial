import { useRootStore } from '@/store'
import { Avatar } from '@mui/joy'
import React from 'react'

export default function UserAvatar() {
  const store = useRootStore()
  const { username, avatar } = store.userStore.userInfo
  return (
    <>
      {avatar ? (
        <Avatar
          src='https://i.pravatar.cc/40?img=2'
          srcSet='https://i.pravatar.cc/80?img=2'
          sx={{ maxWidth: '32px', maxHeight: '32px' }}>
          {username}
        </Avatar>
      ) : (
        <Avatar sx={{ maxWidth: '32px', maxHeight: '32px' }}>{username?.substring(0, 2).toUpperCase()}</Avatar>
      )}
    </>
  )
}
