import React from 'react'
import { useRoutes } from 'react-router-dom'
import History from './history'
import Home from './home'

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
  ])
  return elements
}
