import React from 'react'
import { Avatar, MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import {
  HomeOutlined,
  FireOutlined,
  LikeOutlined,
  PlaySquareOutlined,
  HistoryOutlined,
  ContainerOutlined,
  InboxOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import classnames from 'classnames'
import styles from './styles.module.less'
import { utilStyles } from '@/style'

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
    token: { colorBgContainer, colorBorder },
  } = theme.useToken()

  return (
    <Sider style={{ background: colorBgContainer, borderRight: `1px solid ${colorBorder}` }} width={200}>
      <Menu
        style={{ borderRight: 'none' }}
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={menuItems}
      />

      <Menu style={{ borderRight: 'none' }} mode='inline' selectable={false}>
        <Menu.Item className={styles['like-list-item']}>
          <div className={styles['like-channel']}>
            <Avatar src={`https://pic.imgdb.cn/item/657429aac458853aef4ac52d.jpg`} />
            <span className={classnames(styles['channel-name'], utilStyles.default['text-esipsis-line'])}>
              法尔哈哈无法awdawd
            </span>
            <CloseOutlined className={styles['close-icon']} />
          </div>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default PageSider
