import { MessageOutlined, PlaySquareOutlined, YoutubeOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import style from './style.module.less'
import React from 'react'
import moment from 'moment'
import { timeStamp } from 'console'
import { theme } from 'antd'

interface VideoInfoProps {
  title: string
  read: number
  comment: number
  timestamp: number
}

export default function VideoInfo(props: VideoInfoProps) {
  const publishTime = moment(props.timestamp).toString()
  const {
    token: { colorTextSecondary },
  } = theme.useToken()
  return (
    <>
      <h1 className={classNames('text-elipsis', style.title)}>{props.title}</h1>
      <p
        className={style.info}
        style={{
          color: colorTextSecondary,
        }}>
        <PlaySquareOutlined className={style['info-icon']} />
        <span className={style['info-part']}>{props.read}</span>
        <MessageOutlined className={style['info-icon']} />
        <span className={style['info-part']}>{props.comment}</span>
        <span className={style['info-part']}>{publishTime}</span>
      </p>
    </>
  )
}
