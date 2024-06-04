import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './alert.css'

type AlertProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const Alert: ParentComponent<AlertProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { Alert }
