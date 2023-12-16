import VideoPlayer from '@/components/player'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Player() {
  const { vid } = useParams<{
    vid: string
  }>()

  return (
    <>
      <Layout hasSider>
        <Layout.Content>
          <VideoPlayer />
        </Layout.Content>
        <Layout.Sider>Sider</Layout.Sider>
      </Layout>
    </>
  )
}
