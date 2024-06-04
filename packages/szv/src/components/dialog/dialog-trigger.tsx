import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { useDialog } from './dialog-provider'
import { variants, type Variants } from './dialog-trigger.css'

type DialogTriggerProps = Variants & JSX.ButtonHTMLAttributes<HTMLButtonElement> & {}

const DialogTrigger: ParentComponent<DialogTriggerProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <button class={clsx(variants(), local.class)} {...dialog().triggerProps} {...others}>
      {local.children}
    </button>
  )
}

export { DialogTrigger, DialogTriggerProps }
