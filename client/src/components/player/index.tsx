import React, { useEffect } from 'react'
import VideoJS from 'video.js'

export default function VideoPlayer() {
  useEffect(() => {
    VideoJS('video_player', {
      controls: true,
      preload: 'auto',
    })
  }, [])
  return (
    <div className='player-wrapper'>
      <video id='video_player' className='video-js'>
        <source
          src='https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo-720p.mp4'
          type='video/mp4'></source>
        <source
          src='https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg'
          type='video/webm'
        />
      </video>
    </div>
  )
}
