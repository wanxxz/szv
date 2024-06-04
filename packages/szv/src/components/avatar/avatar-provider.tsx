import { createContext, type ParentComponent } from 'solid-js'
import { createStore, type SetStoreFunction, type Store } from 'solid-js/store'

const AvatarContext = createContext<[Store<AvatarProviderProps>, SetStoreFunction<AvatarProviderProps>]>([
  { loadingStatus: 'idle' },
  () => {}
])

type AvatarProviderProps = {
  loadingStatus?: 'idle' | 'loaded' | 'error'
}

const AvatarProvider: ParentComponent<AvatarProviderProps> = props => {
  const [store, setStore] = createStore<AvatarProviderProps>({ loadingStatus: props.loadingStatus || 'idle' })

  return <AvatarContext.Provider value={[store, setStore]}>{props.children}</AvatarContext.Provider>
}

export { AvatarContext, AvatarProvider }
