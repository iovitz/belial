import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import style from './styles.module.less'
import { VideoDesc, VideoDescProp } from './video-desc'
import { useNavigate } from 'react-router-dom'

function VideoCover(props: { url: string }) {
  return <img className={style['video-cover']} src={props.url} />
}

interface VideoCardProp extends VideoDescProp {
  id: string
  cover: string
  title: string
  author_avatar: string
}

export default function VideoCard(props: VideoCardProp) {
  const navigate = useNavigate()
  const handleGoPlay = () => {
    navigate(`/v/${props.id}`)
  }
  return (
    <Card className={style['video-card']} hoverable cover={<VideoCover url={props.cover} />} onClick={handleGoPlay}>
      <Meta
        avatar={<Avatar src={props.author_avatar} />}
        title={props.title}
        description={<VideoDesc description={props.description} views={props.views} time={props.time} />}
      />
    </Card>
  )
}
