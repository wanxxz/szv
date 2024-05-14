import { normalizeProps, useActor } from '@zag-js/solid'
import * as toast from '@zag-js/toast'
import clsx from 'clsx'
import { createMemo, splitProps, type Component, type JSX } from 'solid-js'
import { ToastClose } from './toast-close'
import { ToastDescription } from './toast-description'
import { ToastTitle } from './toast-title'
import { variants, type Variants } from './toast.css'

type ToastProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    actor: toast.Service
  }

const Toast: Component<ToastProps> = props => {
  const [local, others] = splitProps(props, ['class', 'actor'])
  const [state, send] = useActor(local.actor)
  const api = createMemo(() => toast.connect(state, send, normalizeProps))

  return (
    <div class={clsx(variants(), local.class)} {...api().rootProps} {...others}>
      <span {...api().ghostBeforeProps} />
      <div>
        <ToastTitle {...api().titleProps}>{api().title}</ToastTitle>
        <ToastDescription {...api().descriptionProps}>{api().description}</ToastDescription>
        <ToastClose {...api().closeTriggerProps} />
      </div>
      <span {...api().ghostAfterProps} />
    </div>
  )
}

export { Toast, ToastProps }
