import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './contextual-help-heading.css'

type ContextualHelpHeadingProps = Variants & JSX.HTMLAttributes<HTMLHeadingElement> & {}

const ContextualHelpHeading: ParentComponent<ContextualHelpHeadingProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return <div class={clsx(variants({}), local.class)}>{props.children}</div>
}

export { ContextualHelpHeading, ContextualHelpHeadingProps }
