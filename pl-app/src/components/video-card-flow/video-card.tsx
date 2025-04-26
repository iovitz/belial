import React from 'react'
import { Typography } from 'react-vant'
import VideoCoverImage from '../video-cover-image'

const VideoCard = (props: {
  id: string
  cover: string
  title: string
  author: string
  time?: string
}) => {
  return (
    <>
      <div className="w-full">

        <VideoCoverImage src={props.cover} />
      </div>
      <Typography.Text
        className="text-xs"
        ellipsis={{
          rows: 2,
        }}
      >
        {props.title}
      </Typography.Text>
      <p className="text-xs mt-1 w-full">
        <span className="text-gray-700">{props.author}</span> <span v-if="props.time" className="text-gray-400">{props.time ?? '123'}</span>
      </p>
    </>
  )
}

export default VideoCard
