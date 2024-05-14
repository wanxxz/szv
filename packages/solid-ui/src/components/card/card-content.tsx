import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './card-content.css'

type CardContentProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const CardContent: ParentComponent<CardContentProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { CardContent, CardContentProps }
