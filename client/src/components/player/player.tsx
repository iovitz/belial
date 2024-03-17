import { logger } from '@/common/logger/logger'
import { usePlayer } from '@/hooks/player'
import React from 'react'

interface Props {
  url: string
}

export const Player: React.FC<Props> = (props) => {
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
      <source src={props.url} />
    </video>
  )
}

export default Player
