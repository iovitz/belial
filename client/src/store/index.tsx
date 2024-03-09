import React, { createContext, useContext } from 'react'
import { Provider } from 'mobx-react'
import { RootStore } from './root.store'

const rootStore = new RootStore()
const rootStoreContext = createContext(rootStore)

export const StoreProvider: React.FC<PropsWithChildren> = (props) => {
  return (
    <Provider rootStore={rootStore}>
      <rootStoreContext.Provider value={rootStore}>{props.children}</rootStoreContext.Provider>
    </Provider>
  )
}

export const useRootStore = () => {
  return useContext(rootStoreContext)
}
