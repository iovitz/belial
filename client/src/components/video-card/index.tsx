import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import style from './styles.module.less'
import moment from 'moment'

function VideoDesc(props: { description: string; views: number; time: number }) {
  return (
    <div>
      <p className={style['video-description']}>{props.description}</p>
      <p className={style['video-info']}>{`${props.views} views • ${moment(props.time).fromNow()}`}</p>
    </div>
  )
}

function VideoCover(props: { url: string }) {
  return <img className={style['video-cover']} src={props.url} />
}

export default function VideoCard() {
  return (
    <Card hoverable cover={<VideoCover url='https://pic.imgdb.cn/item/657428dbc458853aef47dd7c.png' />}>
      <Meta
        avatar={<Avatar src='https://pic.imgdb.cn/item/657429aac458853aef4ac52d.jpg' />}
        title='Card title'
        description={
          <VideoDesc
            description='DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription'
            views={30}
            time={1702096644685}
          />
        }
      />
    </Card>
  )
}
