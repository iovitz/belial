import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import type Player from 'video.js/dist/types/player'
import 'video.js/dist/video-js.css'

function VideoPlayer(props: {
  url: string
  type: string
}) {
  const videoContainer = useRef<HTMLVideoElement>(null)
  let _player: Player

  useEffect(() => {
    if (videoContainer.current) {
      _player = videojs(videoContainer.current, {
        autoplay: true, // 自动播放
        controls: true, // 显示控件
        responsive: true, // 自适应
        fluid: true, // 流式布局
        sources: [{
          src: props.url, // 视频文件的 URL
          type: props.type,
        }],
      })
    }
  })

  useEffect(() => {
    _player?.src({
      src: props.url,
      type: props.type,
    })
  }, [props.url, props.type])

  return (
    <div className="aspect-video">
      <video ref={videoContainer} className="video-js">
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
