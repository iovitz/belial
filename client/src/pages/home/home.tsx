import PageSider from '@/components/page-sider/page-sider'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './home/home'
import { Grid, GridItem } from '@chakra-ui/react'

export default function HomeWrapper() {
  const location = useLocation()

  // 处理Index路由
  const isIndex = location.pathname === '/'

  return (
    <>
      <Grid templateAreas={`"nav main"`} gridTemplateColumns={'200px 1fr'} h='100%'>
        <GridItem h='100%' area={'nav'}>
          <PageSider />
        </GridItem>
        <GridItem h={'100%'} overflowY={'scroll'} overflowX={'hidden'} area={'main'} bg='gray.50'>
          {/* 处理Index路由 */}
          {isIndex ? <Home /> : <Outlet />}
        </GridItem>
      </Grid>
    </>
  )
}
