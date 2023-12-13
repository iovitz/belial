import React from 'react'
import { useRoutes } from 'react-router-dom'
import History from './history'
import Index from './index'
import Player from './player'
import Home from './home'

export default function RouterElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/history',
      element: <History />,
    },
    {
      path: '/v/:vid',
      element: <Player />,
    },
    {
      path: '/u/:uid',
      element: <Home />,
    },
  ])
  return elements
}
