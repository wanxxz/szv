import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './contextual-help-popover.css'

type ContextualHelpPopoverProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const ContextualHelpPopover: ParentComponent<ContextualHelpPopoverProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return <div class={clsx(variants({}), local.class)}>{local.children}</div>
}

export { ContextualHelpPopover, ContextualHelpPopoverProps }
