import React from 'react'
import style from './styles.module.less'
import moment from 'moment'

export interface VideoDescProp {
  description: string
  views: number
  time: number
}

export function VideoDesc(props: VideoDescProp) {
  return (
    <div>
      <p className={style['video-description']}>{props.description}</p>
      <p className={style['video-info']}>{`${props.views} views • ${moment(props.time).fromNow()}`}</p>
    </div>
  )
}
