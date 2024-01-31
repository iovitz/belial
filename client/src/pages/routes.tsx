import React from 'react'
import { useRoutes } from 'react-router-dom'
import History from './home/history/history'
import HomeWrapper from './home/container'
import Watch from './watch/watch'
import People from './home/people/people'

export default function RouterElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <HomeWrapper />,
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
