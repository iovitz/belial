import React from 'react'
import { useRoutes } from 'react-router-dom'
import History from './history'
import Home from './home'
import Player from './player'
import People from './people'

export default function RouterElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
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
      element: <People />,
    },
  ])
  return elements
}
