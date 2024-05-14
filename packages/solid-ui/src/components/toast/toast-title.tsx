import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './toast-title.css'

type ToastTitleProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const ToastTitle: ParentComponent<ToastTitleProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { ToastTitle, ToastTitleProps }
