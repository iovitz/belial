import React from 'react'
import VideoCoverImage from '../video-cover-image'
import { Typography } from 'react-vant'

export const VideoCardFlowColumn = (props: {
  id: string
  cover: string
  title: string
  time: string
  playCount: number
}) => {
  return (
    <div className="flex leading-none">
      <VideoCoverImage src={props.cover} width="150px" />
      <div className="flex min-w-0 ml-2  flex-col justify-between w-full">
        <Typography.Text className="text-sm" ellipsis={{
          rows: 2,
        }}>
          {props.title}
        </Typography.Text>

        <div>
          <p className="text-xs text-gray-400">
            <span className="text-gray-400">{props.time}</span>
          </p>

          <p className="text-xs mt-1 flex items-center justify-between text-gray-400 leading-4">
            {/* <Icon size="16" name="eye-o" className="mr-1 " /> */}
            <span className="mr-auto">{props.playCount}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

