import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './alert-icon.css'

type AlertIconProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const AlertIcon: ParentComponent<AlertIconProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { AlertIcon, AlertIconProps }
