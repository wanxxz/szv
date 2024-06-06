import clsx from 'clsx'
import { splitProps, type JSX, type ParentProps, type ValidComponent } from 'solid-js'
import { Polymorphic, PolymorphicProps } from '../polymorphic'
import { useDialog } from './dialog-provider'
import { variants, type Variants } from './dialog-trigger.css'

type DialogTriggerProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & ParentProps & Variants & {}

const DialogTrigger = <T extends ValidComponent = 'button'>(props: PolymorphicProps<T, DialogTriggerProps>) => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['class', 'as'])

  return (
    <Polymorphic<DialogTriggerProps>
      as={local.as ?? 'button'}
      class={clsx(variants(), local.class)}
      {...dialog().triggerProps}
      {...others}
    />
  )
}

export { DialogTrigger, DialogTriggerProps }
