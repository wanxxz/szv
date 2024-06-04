import { normalizeProps, useMachine, type PropTypes } from '@zag-js/solid'
import * as toast from '@zag-js/toast'
import {
  For,
  createContext,
  createMemo,
  createUniqueId,
  useContext,
  type Accessor,
  type ParentComponent
} from 'solid-js'
import { Toast } from './toast'
import { ToastGroup } from './toast-group'

const ToastContext = createContext()
const useToast = () => useContext(ToastContext) as Accessor<toast.GroupApi<PropTypes, any>>

type ToastProviderProps = ParentComponent<{ placement?: toast.Placement }>

const ToastProvider: ToastProviderProps = props => {
  const [state, send] = useMachine(
    toast.group.machine({ id: createUniqueId(), overlap: true, placement: props.placement })
  )
  const api = createMemo(() => toast.group.connect(state, send, normalizeProps))

  return (
    <ToastContext.Provider value={api}>
      <For each={api().getPlacements()}>
        {placement => (
          <ToastGroup {...api().getGroupProps({ placement })}>
            <For each={api().getToastsByPlacement(placement)}>{toast => <Toast actor={toast} />}</For>
          </ToastGroup>
        )}
      </For>
      {props.children}
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastProviderProps, useToast }
