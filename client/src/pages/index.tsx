import React from 'react'
import { useRoutes } from 'react-router-dom'
import History from './home/history'
import Home from './home'
import Watch from './watch'
import People from './home/people'

export default function RouterElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/history',
          element: <History />,
        },
        {
          path: '/u/:uid',
          element: <People />,
        },
      ],
    },
    {
      path: '/v/:vid',
      element: <Watch />,
    },
  ])
  return elements
}
