import React from 'react'
import { useColorScheme } from '@mui/joy/styles'
import Box from '@mui/joy/Box'
import IconButton from '@mui/joy/IconButton'
import Stack from '@mui/joy/Stack'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import Tooltip from '@mui/joy/Tooltip'
import Drawer from '@mui/joy/Drawer'
import ModalClose from '@mui/joy/ModalClose'
import DialogTitle from '@mui/joy/DialogTitle'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import BookRoundedIcon from '@mui/icons-material/BookRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import TeamNav from '../navigation/navigation'
import HeaderAvatar from './header-avatar'

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <IconButton size='sm' variant='outlined' color='primary' />
  }
  return (
    <Tooltip title='Change theme' variant='outlined'>
      <IconButton
        id='toggle-mode'
        size='sm'
        variant='plain'
        color='neutral'
        sx={{ alignSelf: 'center' }}
        onClick={() => {
          if (mode === 'light') {
            setMode('dark')
          } else {
            setMode('light')
          }
        }}>
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Box
          component={'h1'}
          sx={{
            fontSize: '1.5em',
          }}>
          {t('egg_video')}
        </Box>
        <Button variant='plain' color='neutral' aria-pressed='true' size='sm' sx={{ alignSelf: 'center' }}>
          主页
        </Button>
        <Button variant='plain' color='neutral' size='sm' sx={{ alignSelf: 'center' }}>
          创作
        </Button>
        <Button variant='plain' color='neutral' size='sm' sx={{ alignSelf: 'center' }}>
          漫游
        </Button>
      </Stack>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant='plain' color='neutral' onClick={() => setOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Drawer sx={{ display: { xs: 'inline-flex', sm: 'none' } }} open={open} onClose={() => setOpen(false)}>
          <ModalClose />
          <DialogTitle>{t('egg_video')}</DialogTitle>
          <Box sx={{ px: 1 }}>
            <TeamNav />
          </Box>
        </Drawer>
      </Box>

      <Input
        size='sm'
        variant='outlined'
        placeholder='Search anything…'
        startDecorator={<SearchRoundedIcon color='primary' />}
        sx={{
          alignSelf: 'center',
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}>
        <IconButton
          size='sm'
          variant='outlined'
          color='neutral'
          sx={{ display: { xs: 'inline-flex', sm: 'none' }, alignSelf: 'center' }}>
          <SearchRoundedIcon />
        </IconButton>
        <Tooltip title='Joy UI overview' variant='outlined'>
          <IconButton
            size='sm'
            variant='plain'
            color='neutral'
            component='a'
            href='/blog/first-look-at-joy/'
            sx={{ alignSelf: 'center' }}>
            <BookRoundedIcon />
          </IconButton>
        </Tooltip>
        <ColorSchemeToggle />
        <HeaderAvatar />
      </Box>
    </Box>
  )
}
