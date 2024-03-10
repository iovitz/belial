import React from 'react'
import { useColorScheme } from '@mui/joy/styles'
import Box from '@mui/joy/Box'
import IconButton from '@mui/joy/IconButton'
import Stack from '@mui/joy/Stack'
import Button from '@mui/joy/Button'
import Tooltip from '@mui/joy/Tooltip'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import HeaderAvatar from './header-avatar'
import HeaderSearch from './header-search'
import HeaderUplaod from './header-upload'

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
    <Tooltip title='切换主题' variant='outlined'>
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
          播放
        </Button>
        <Button variant='plain' color='neutral' size='sm' sx={{ alignSelf: 'center' }}>
          创作
        </Button>
      </Stack>

      <HeaderSearch />

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
        <HeaderUplaod />
        <ColorSchemeToggle />
        <HeaderAvatar />
      </Box>
    </Box>
  )
}
