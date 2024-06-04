import * as dialog from '@zag-js/dialog'
import { normalizeProps, useMachine } from '@zag-js/solid'
import { createMemo, createUniqueId, type JSX, type ParentComponent } from 'solid-js'
import { DialogProvider } from './dialog-provider'

type DialogProps = Omit<dialog.Context, 'id'> & {}

const Dialog: ParentComponent<DialogProps> = props => {
  const [state, send] = useMachine(
    dialog.machine({
      id: createUniqueId(),
      preventScroll: props.preventScroll,
      closeOnInteractOutside: props.closeOnInteractOutside,
      closeOnEscape: props.closeOnEscape,
      role: props.role
    })
  )
  const api = createMemo(() => dialog.connect(state, send, normalizeProps))

  return <DialogProvider api={api}>{props.children}</DialogProvider>
}

export { Dialog, type DialogProps }
