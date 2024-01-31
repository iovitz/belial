import React from 'react'
import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'

import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'

import Layout from '@/components/page-layouts/page-layout'
import Header from '@/components/page-header/page-header'
import Navigation from '@/components/navigation/navigation'
// import { Outlet } from 'react-router-dom'
import Home from './home/home'
import Box from '@mui/joy/Box'

export default function HomeContainer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  return (
    <Box height={'100%'}>
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Stack
        id='tab-bar'
        direction='row'
        justifyContent='space-around'
        spacing={1}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          zIndex: '999',
          bottom: 0,
          position: 'fixed',
          width: '100dvw',
          py: 2,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}>
        <Button
          variant='plain'
          color='neutral'
          component='a'
          href='/joy-ui/getting-started/templates/email/'
          size='sm'
          startDecorator={<EmailRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}>
          Email
        </Button>
        <Button
          variant='plain'
          color='neutral'
          aria-pressed='true'
          component='a'
          href='/joy-ui/getting-started/templates/team/'
          size='sm'
          startDecorator={<PeopleAltRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}>
          Team
        </Button>
        <Button
          variant='plain'
          color='neutral'
          component='a'
          href='/joy-ui/getting-started/templates/files/'
          size='sm'
          startDecorator={<FolderRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}>
          Files
        </Button>
      </Stack>
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100%',
            overflow: 'hidden',
          }),
        }}>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main
          flex={1}
          sx={{
            height: '100%',
            overflowY: 'scroll',
          }}>
          {/* <Outlet /> */}
          <Home />
        </Layout.Main>
      </Layout.Root>
    </Box>
  )
}
