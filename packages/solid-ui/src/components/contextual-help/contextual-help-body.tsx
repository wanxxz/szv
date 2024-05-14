import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './contextual-help-body.css'

type ContextualHelpBodyProps = Variants & JSX.HTMLAttributes<HTMLParagraphElement> & {}

const ContextualHelpBody: ParentComponent<ContextualHelpBodyProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return <div class={clsx(variants({}), local.class)}>{props.children}</div>
}

export { ContextualHelpBody, ContextualHelpBodyProps }
