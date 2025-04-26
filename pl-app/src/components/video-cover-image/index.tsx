import React from 'react'
import { Image } from 'react-vant'

const VideoCoverImage = (props: {
  src: string
}) => {
  return (
    <div className="aspect-video text-0">
      <Image className='h-full w-full' src={props.src} />
    </div>
  )
}

export default VideoCoverImage
