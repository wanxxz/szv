import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './help-text.css'

type HelptextProps = Variants & JSX.HTMLAttributes<HTMLSpanElement> & {}

const Helptext: ParentComponent<HelptextProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class', 'size'])

  return (
    <span class={clsx(variants({ size: local.size }), local.class)} {...others}>
      {props.children}
    </span>
  )
}

export { Helptext, HelptextProps }
