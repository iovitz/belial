import { ChatO, ClockO, EyeO } from '@react-vant/icons'
import React from 'react'
import { Button, Image, Typography } from 'react-vant'

function VideoIntroduction(props: {
  avatar: string
  description: string
  title: string
  time: number
  comment: number
  watch: number
}) {
  return (
    <>

      <div className="bg-white pb-4">
        <div className="py-4 px-2">
          <div className="flex items-center">
            <Image src="props.avatar" round height="40" width="40" />
            <div className="mx-2 flex-1 min-w-0">
              <h4 className="!my-0">title</h4>
              <Typography.Text
                className="text-sm"
                ellipsis={{
                  rows: 1,
                }}
              >
                { props.description }
              </Typography.Text>
            </div>
            <Button type="primary" size="small">
              关注
            </Button>
          </div>
          <div className="text-base">
            <div className="m-1">
              <Typography.Text
                className="text-sm"
                ellipsis={{
                  rows: 2,
                }}
              >
                {props.title}
              </Typography.Text>
            </div>
            <div className="mx-2 mt-2 text-gray-500 text-sm flex justify-between items-center">
              <ClockO className="inline-block mr-1" />
              <span className="mr-auto">
                { props.time }
              </span>
              <EyeO className="inline-block mx-1" />
              { props.watch }
              <ChatO className="inline-block mx-1" />
              { props.comment }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoIntroduction
