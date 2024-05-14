import { type PropTypes } from '@zag-js/solid'
import { type GroupApi } from '@zag-js/toast'
import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './toast-group.css'

type ToastGroupProps = Variants &
  ReturnType<GroupApi<PropTypes, any>['getGroupProps']> &
  JSX.HTMLAttributes<HTMLDivElement> & {}

const ToastGroup: ParentComponent<ToastGroupProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { ToastGroup, ToastGroupProps }
