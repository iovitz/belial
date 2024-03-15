import { RefObject, useEffect } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
import { logger } from '@/common/logger/logger'

interface HookOptions {
  divRev: RefObject<HTMLVideoElement>
  plyrOptions: Plyr.Options
  onReady: (event: Plyr.PlyrEvent) => void
}

export function usePlayer({ divRev, plyrOptions, onReady }: HookOptions) {
  logger.verbose('加载播放器')
  useEffect(() => {
    const player = new Plyr(divRev.current!, plyrOptions)
    player.on('ready', (e) => {
      onReady(e)
      logger.verbose('播放器加载成功', e)
    })
    return () => {}
  }, [])
}
