import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './contextual-help.css'

type ContextualHelpProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const ContextualHelp: ParentComponent<ContextualHelpProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return <div class={clsx(variants({}), local.class)}>{local.children}</div>
}

export { ContextualHelp, ContextualHelpProps }
