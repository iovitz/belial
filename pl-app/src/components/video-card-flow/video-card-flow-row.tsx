import React, { useState } from 'react'
import { Grid, GridItem } from 'react-vant'
import VideoCard from './video-card'

function VideoCardFlowRow() {
  const [videoList, _setVideoList] = useState([
    {
      id: '1',
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
      author: '老弟',
      time: '10-4',
    },
    {
      id: '2',
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
      author: '老弟',
      time: '10-4',
    },
    {
      id: '3',
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
      author: '老弟',
      time: '10-4',
    },
    {
      id: '4',
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
      author: '老弟',
      time: '10-4',
    },
    {
      id: '5',
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
      author: '老弟',
      time: '10-4',
    },
    {
      id: '6',
      cover: 'https://fakeimg.pl/1920x1080/2775b6/',
      title: '为什么动物几乎不锻炼肌肉还那么发达，人类却要不断健身才可以？',
      author: '老弟',
      time: '10-4',
    },
  ])
  return (

    <Grid
      border={false}
      columnNum={2}
    >
      {
        videoList.map((videoItem) => {
          return (
            <GridItem key={videoItem.id}>
              <VideoCard id={videoItem.id} cover={videoItem.cover} title={videoItem.title} author={videoItem.author} />
            </GridItem>
          )
        })
      }
    </Grid>
  )
}

export default VideoCardFlowRow
