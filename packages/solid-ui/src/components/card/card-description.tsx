import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './card-description.css'

type CardDescriptionProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const CardDescription: ParentComponent<CardDescriptionProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { CardDescription, CardDescriptionProps }
