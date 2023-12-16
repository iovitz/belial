import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Home() {
  const { uid } = useParams<{
    uid: string
  }>()

  const location = useLocation()

  console.log('location', location)
  return (
    <>
      <h1>{uid}</h1>
    </>
  )
}
