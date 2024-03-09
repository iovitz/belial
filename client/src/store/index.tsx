import React from 'react'
import { Provider } from 'mobx-react'
import { settingStore } from './config.store'
import { userStore } from './user.store'

interface Props {
  children: JSX.Element[]
}

export default function StoreProvider(props: Props) {
  return (
    <Provider configStore={settingStore} userStore={userStore}>
      {props.children}
    </Provider>
  )
}
