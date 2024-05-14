import {
  Accessor,
  createContext,
  createSignal,
  splitProps,
  useContext,
  type JSX,
  type ParentComponent,
  type ParentProps
} from 'solid-js'
import { DropdownMenuContext } from './dropdown-menu'

interface DropdownMenuRadioGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
}

interface DropdownMenuRadioGroupContextProps {
  value: Accessor<NonNullable<DropdownMenuRadioGroupProps['value']>>
  onValueChange: NonNullable<DropdownMenuRadioGroupProps['onValueChange']>
}

const DropdownMenuRadioGroupContext = createContext<DropdownMenuRadioGroupContextProps>({
  value: () => {},
  onValueChange: () => {}
})

function DropdownMenuRadioGroupProvider(props: ParentProps<DropdownMenuRadioGroupProps>) {
  const [value, setValue] = createSignal('')
  const onValueChange = (value: string) => {
    setValue(value)
    props?.onValueChange?.(value)
  }

  return (
    <DropdownMenuRadioGroupContext.Provider value={{ value, onValueChange }}>
      {props.children}
    </DropdownMenuRadioGroupContext.Provider>
  )
}

const DropdownMenuRadioGroup: ParentComponent<DropdownMenuRadioGroupProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class', 'value', 'onValueChange'])
  const { api } = useContext(DropdownMenuContext)

  return (
    <DropdownMenuRadioGroupProvider value={local.value} onValueChange={local.onValueChange}>
      <div class={local.class} {...api().getItemGroupProps} {...others}>
        {local.children}
      </div>
    </DropdownMenuRadioGroupProvider>
  )
}

export { DropdownMenuRadioGroup, DropdownMenuRadioGroupContext }
