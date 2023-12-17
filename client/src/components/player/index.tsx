import classNames from 'classnames'
import { throttle } from 'lodash'
import React, { Component } from 'react'
import VideoJS from 'video.js'
import Player from 'video.js/dist/types/player'
import style from './style.module.less'

export default class VideoPlayer extends Component {
  player: Player | null = null

  componentDidMount(): void {
    const targetNode = document.querySelector('#player_container')
    if (!targetNode) {
      return
    }

    this.player = VideoJS(targetNode, {
      controls: true,
      preload: 'auto',
    })
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = throttle(() => {
    const { player } = this
    if (!player) return
    const nextWidth = Math.floor((player.currentWidth() * 9) / 16)
    if (player.currentHeight() === nextWidth) return
    player.height(nextWidth)
  }, 300)

  render() {
    return (
      <div className={style['player-wrapper']}>
        <video
          id='player_container'
          className={classNames('video-js', style.player)}
          poster='https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg'>
          <source
            src='https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo-720p.mp4'
            type='video/mp4'></source>
        </video>
      </div>
    )
  }
}
