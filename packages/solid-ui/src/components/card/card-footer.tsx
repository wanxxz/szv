import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './card-footer.css'

type CardFooterProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const CardFooter: ParentComponent<CardFooterProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { CardFooter, CardFooterProps }
