import React from 'react'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import {
  HomeOutlined,
  FireOutlined,
  LikeOutlined,
  PlaySquareOutlined,
  HistoryOutlined,
  ContainerOutlined,
  InboxOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const menuItems: MenuProps['items'] = [
  {
    key: `1`,
    icon: React.createElement(HomeOutlined),
    label: `Home`,
  },
  {
    key: `2`,
    icon: React.createElement(FireOutlined),
    label: `Trending`,
  },
  {
    key: `3`,
    icon: React.createElement(ContainerOutlined),
    label: `Subscription`,
  },
  {
    type: 'divider', // Must have
  },
  {
    key: `4`,
    icon: React.createElement(InboxOutlined),
    label: `Library`,
  },
  {
    key: `5`,
    icon: React.createElement(HistoryOutlined),
    label: `History`,
  },
  {
    key: `6`,
    icon: React.createElement(PlaySquareOutlined),
    label: `My Video`,
  },
  {
    key: `7`,
    icon: React.createElement(LikeOutlined),
    label: `Like Videos`,
  },
  {
    type: 'divider', // Must have
  },
]

const PageSider: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={menuItems}
      />
    </Sider>
  )
}

export default PageSider
