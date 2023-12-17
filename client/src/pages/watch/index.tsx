import VideoPlayer from '@/components/player'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.less'
import VideoInfo from './video-info'

export default function Player() {
  const { vid } = useParams<{
    vid: string
  }>()

  return (
    <div className={style['watch-page-container']}>
      <Layout>
        <Layout.Content className={style['watch-page-main']}>
          <VideoInfo
            read={100}
            title={'阿尔法违法违法阿尔法违法违法阿尔法违法违法阿尔法违法违法'}
            comment={14214}
            timestamp={Date.now()}
          />
          <VideoPlayer />
        </Layout.Content>
        <Layout.Sider width={350}>Sider</Layout.Sider>
      </Layout>
    </div>
  )
}
