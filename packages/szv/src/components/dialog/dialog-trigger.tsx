import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent, type ValidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { useDialog } from './dialog-provider'
import { variants, type Variants } from './dialog-trigger.css'

type DialogTriggerProps = Variants &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    component?: ValidComponent
  }

const DialogTrigger: ParentComponent<DialogTriggerProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['class', 'component'])

  return (
    <Dynamic
      component={local.component ?? 'button'}
      class={clsx(variants(), local.class)}
      {...dialog().triggerProps}
      {...others}
    />
  )
}

export { DialogTrigger, DialogTriggerProps }
