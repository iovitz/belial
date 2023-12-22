import { Avatar, List } from 'antd'
import React, { Component } from 'react'
import style from './style.module.less'

export default class CommentList extends Component {
  render() {
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ]
    return (
      <>
        <div className={style.title}>评论列表</div>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                title={<a href='https://ant.design'>{item.title}</a>}
                description='Ant Design, a design language for background applications, is refined by Ant UED TeamAnt Design, a design language for background applications, is refined by Ant UED TeamAnt Design, a design language for background applications, is refined by Ant UED TeamAnt Design, a design language for background applications, is refined by Ant UED Team'
              />
            </List.Item>
          )}
        />
      </>
    )
  }
}
