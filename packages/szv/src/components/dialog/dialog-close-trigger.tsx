import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dialog-close-trigger.css'
import { useDialog } from './dialog-provider'

type DialogCloseTriggerProps = Variants & JSX.ButtonHTMLAttributes<HTMLButtonElement> & {}

const DialogCloseTrigger: ParentComponent<DialogCloseTriggerProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <button class={clsx(variants(), local.class)} {...dialog().closeTriggerProps} {...others}>
      {local.children}
    </button>
  )
}

export { DialogCloseTrigger, DialogCloseTriggerProps }
