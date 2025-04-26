import React from 'react'
import { Image } from 'react-vant'

const VideoCoverImage = (props: {
  src: string
  width?: string
}) => {
  return (
    <div className="aspect-video text-0">
      <Image className='h-full' src={props.src} style={{
        width: props.width ?? '100%'
      }} />
    </div>
  )
}

export default VideoCoverImage
