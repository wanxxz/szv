import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './alert-title.css'

type AlertTitleProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const AlertTitle: ParentComponent<AlertTitleProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { AlertTitle }
