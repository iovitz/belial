import { Col, Row } from 'antd'
import React from 'react'
import VideoCard from '../video-card'

export default function VideoList() {
  const videoList = new Array(30).fill(1).map((_, i) => ({
    id: Math.random().toString(),
    title: '标题标题标题标题标题标题标题标题标题标题标题标题',
    cover: 'https://s11.ax1x.com/2023/12/14/pihQIZ6.png',
    author_avatar: 'https://pic.imgdb.cn/item/657429aac458853aef4ac52d.jpg',
    description:
      'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
    views: Math.floor(Math.random() * 100),
    time: Date.now(),
  }))

  return (
    <Row gutter={14}>
      {videoList.map((VideoInfo) => (
        <Col span={6} key={VideoInfo.id}>
          <VideoCard
            cover={VideoInfo.cover}
            id={VideoInfo.id}
            title={VideoInfo.title}
            author_avatar={VideoInfo.author_avatar}
            description={VideoInfo.description}
            views={VideoInfo.views}
            time={VideoInfo.time}
          />
        </Col>
      ))}
    </Row>
  )
}
