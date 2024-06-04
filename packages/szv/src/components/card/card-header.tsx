import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './card-header.css'

type CardHeaderProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const CardHeader: ParentComponent<CardHeaderProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { CardHeader, CardHeaderProps }
