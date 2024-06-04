import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './card.css'

type CardProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const Card: ParentComponent<CardProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { Card }
