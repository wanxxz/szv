import clsx from 'clsx'
import { splitProps, type JSX, type ParentProps, type ValidComponent } from 'solid-js'
import { Polymorphic, type PolymorphicProps } from '../polymorphic'
import { variants, type Variants } from './dialog-close-trigger.css'
import { useDialog } from './dialog-provider'

type DialogCloseTriggerProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & ParentProps & Variants & {}

const DialogCloseTrigger = <T extends ValidComponent = 'button'>(
  props: PolymorphicProps<T, DialogCloseTriggerProps>
) => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['class'])

  return (
    <Polymorphic<DialogCloseTriggerProps>
      class={clsx(variants(), local.class)}
      {...dialog().closeTriggerProps}
      {...others}
    />
  )
}

export { DialogCloseTrigger, DialogCloseTriggerProps }
