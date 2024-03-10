import {
  Avatar,
  Box,
  ListDivider,
  Menu,
  MenuButton,
  MenuItem,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from '@mui/joy'
import Dropdown from '@mui/joy/Dropdown'
import React, { useState } from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import LoginAndRegister from './login-and-register'
import { observer } from 'mobx-react'
import { useRootStore } from '@/store'
import UserAvatar from './avatar-image'

export default observer(function HeaderAvatar() {
  const store = useRootStore()
  const isLogin = store.userStore.isLogged
  const { username, email } = store.userStore.userInfo

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {isLogin ? (
        <Dropdown>
          <MenuButton variant='plain' size='sm' sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}>
            <UserAvatar />
          </MenuButton>
          <Menu
            placement='bottom-end'
            size='sm'
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
            }}>
            <MenuItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <UserAvatar />
                <Box sx={{ ml: 1.5 }}>
                  <Typography level='title-sm' textColor='text.primary'>
                    {username}
                  </Typography>
                  <Typography level='body-xs' textColor='text.tertiary'>
                    {email}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <ListDivider />
            <MenuItem>
              <HelpRoundedIcon />
              Help
            </MenuItem>
            <MenuItem>
              <SettingsRoundedIcon />
              Settings
            </MenuItem>
            <ListDivider />
            <MenuItem>
              <LogoutRoundedIcon />
              Log out
            </MenuItem>
          </Menu>
        </Dropdown>
      ) : (
        <Avatar
          src='https://i.pravatar.cc/40?img=2'
          srcSet='https://i.pravatar.cc/80?img=2'
          style={{ maxWidth: '32px', maxHeight: '32px', cursor: 'pointer' }}
          onClick={() => setIsModalOpen(true)}
        />
      )}

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalDialog maxWidth={350} minWidth={350}>
          <ModalClose />
          <LoginAndRegister />
        </ModalDialog>
      </Modal>
    </>
  )
})
