import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent, type ValidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { variants, type Variants } from './dialog-close-trigger.css'
import { useDialog } from './dialog-provider'

type DialogCloseTriggerProps = Variants &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    component?: ValidComponent
  }

const DialogCloseTrigger: ParentComponent<DialogCloseTriggerProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['class', 'component'])

  return (
    <Dynamic
      component={local.component ?? 'button'}
      class={clsx(variants(), local.class)}
      {...dialog().closeTriggerProps}
      {...others}
    />
  )
}

export { DialogCloseTrigger, DialogCloseTriggerProps }
