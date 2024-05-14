import * as menu from '@zag-js/menu'
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/solid'
import {
  createContext,
  createMemo,
  createUniqueId,
  splitProps,
  type Accessor,
  type JSX,
  type ParentComponent,
  type ParentProps
} from 'solid-js'

interface DropdownMenuContextProps {
  api: Accessor<menu.Api<PropTypes>>
}

const DropdownMenuContext = createContext<DropdownMenuContextProps>({ api: undefined as never })

function DropdownMenuProvider(props: ParentProps<DropdownMenuProps>) {
  const [state, send] = useMachine(menu.machine({ id: createUniqueId() }))
  const api = createMemo(() => menu.connect(state, send, normalizeProps))

  return <DropdownMenuContext.Provider value={{ api }}>{props.children}</DropdownMenuContext.Provider>
}

type DropdownMenuProps = JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenu: ParentComponent<DropdownMenuProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <DropdownMenuProvider>
      <div class={local.class} {...others}>
        {local.children}
      </div>
    </DropdownMenuProvider>
  )
}

export { DropdownMenu, DropdownMenuContext, DropdownMenuProps, DropdownMenuProvider }
