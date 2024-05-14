import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './badge.css'

type BadgeProps = Variants & JSX.HTMLAttributes<HTMLSpanElement> & {}

const Badge: ParentComponent<BadgeProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class', 'variant', 'size'])

  return (
    <span class={clsx(variants({ variant: local.variant, size: local.size }), local.class)} {...others}>
      {local.children}
    </span>
  )
}

export { Badge, BadgeProps }
