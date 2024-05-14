import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './contextual-help-link.css'

type ContextualHelpLinkProps = Variants & JSX.HTMLAttributes<HTMLAnchorElement> & {}

const ContextualHelpLink: ParentComponent<ContextualHelpLinkProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <a class={clsx(variants({}), local.class)} {...others}>
      {props.children}
    </a>
  )
}

export { ContextualHelpLink, ContextualHelpLinkProps }
