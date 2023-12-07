import { Avatar, Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

export default function Home() {
  return (
    <Row gutter={14}>
      <Col span={8}>
        <Card hoverable cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}>
          <Meta
            avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />}
            title='Card title'
            description='This is the description'
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}>
          <Meta
            avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />}
            title='Card title'
            description='This is the description'
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}>
          <Meta
            avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />}
            title='Card title'
            description='This is the description'
          />
        </Card>
      </Col>
    </Row>
  )
}
