import PageSider from '@/components/page-sider'
import { Layout, theme } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './home'
import styles from './styles.module.less'
import { Grid, GridItem, Menu, MenuButton, MenuList, Portal, MenuItem } from '@chakra-ui/react'

export default function HomeWrapper() {
  const location = useLocation()

  // 处理Index路由
  const isIndex = location.pathname === '/'

  return (
    <>
      <Grid templateAreas={`"nav main"`} gridTemplateColumns={'200px 1fr'} h='100%'>
        <GridItem px='2' h='100%' area={'nav'}>
          <Menu>
            <MenuButton>Open menu</MenuButton>
            <Portal>
              <MenuList>
                <MenuItem>Menu 1</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </GridItem>
        <GridItem h={'100%'} overflowY={'scroll'} overflowX={'hidden'} area={'main'}>
          {/* 处理Index路由 */}
          {isIndex ? <Home /> : <Outlet />}
        </GridItem>
      </Grid>
    </>
  )
}
