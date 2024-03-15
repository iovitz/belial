import { logger } from '@/common/logger'
import { usePlayer } from '@/hooks/player'
import React from 'react'

export const Player: React.FC = () => {
  const divRef = React.useRef<HTMLVideoElement>(null)
  usePlayer({
    divRev: divRef,
    onReady(player) {
      logger.verbose('挂载成功', player)
    },
    plyrOptions: {},
  })

  return (
    <video ref={divRef} id='videoAr'>
      <source src='https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4' />
    </video>
  )
}

export default Player
