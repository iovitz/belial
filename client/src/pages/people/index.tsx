import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
  const { uid } = useParams<{
    uid: string
  }>()
  return (
    <>
      <h1>{uid}</h1>
    </>
  )
}
