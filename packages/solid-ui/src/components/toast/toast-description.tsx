import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './toast-description.css'

type ToastDescriptionProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const ToastDescription: ParentComponent<ToastDescriptionProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { ToastDescription, ToastDescriptionProps }
