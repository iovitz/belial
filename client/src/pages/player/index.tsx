import React from 'react'
import { useParams } from 'react-router-dom'

export default function Player() {
  const { vid } = useParams<{
    vid: string
  }>()
  return (
    <>
      <h1>{vid}</h1>
    </>
  )
}
