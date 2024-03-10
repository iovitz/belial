import React from 'react'
import Layout from '@/components/page-layouts/page-layout'
import Header from '@/components/page-header/page-header'
import Navigation from '@/components/navigation/navigation'
import Home from './home/home'
import Box from '@mui/joy/Box'

export default function HomeContainer() {
  return (
    <Box height={'100%'}>
      <Layout.Root>
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
