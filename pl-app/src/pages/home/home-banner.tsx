import React, { useState } from 'react'
import { Swiper } from 'react-vant'
import VideoCoverImage from '../../components/video-cover-image'

export function HomeBanner() {
  const [swiperImages, _setSwiperImages] = useState([{
    id: '1',
    cover: 'https://fakeimg.pl/1920x1080/2775b6/',
  }, {
    id: '2',
    cover: 'https://fakeimg.pl/1920x1080/2775b6/',
  }, {
    id: '3',
    cover: 'https://fakeimg.pl/1920x1080/2775b6/',
  }])
  return (
    <Swiper>
      {swiperImages.map(image => (
        <Swiper.Item key={image.id}>
          <VideoCoverImage src={image.cover} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
