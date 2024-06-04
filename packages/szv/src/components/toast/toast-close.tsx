import { type PropTypes } from '@zag-js/solid'
import { type Api } from '@zag-js/toast'
import clsx from 'clsx'
import { X } from 'lucide-solid'
import { splitProps, type Component, type JSX } from 'solid-js'
import { variants, type Variants } from './toast-close.css'

type ToastCloseProps = Variants &
  Api<PropTypes, any>['closeTriggerProps'] &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {}

const ToastClose: Component<ToastCloseProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <button class={clsx(variants(), local.class)} {...others}>
      <X />
    </button>
  )
}

export { ToastClose, ToastCloseProps }
