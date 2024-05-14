import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './toast-action.css'

type ToastActionProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const ToastAction: ParentComponent<ToastActionProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { ToastAction, ToastActionProps }
