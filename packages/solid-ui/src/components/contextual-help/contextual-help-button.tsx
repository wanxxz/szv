import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './contextual-help-button.css'

type ContextualHelpButtonProps = Variants & JSX.HTMLAttributes<HTMLButtonElement> & {}

const ContextualHelpButton: ParentComponent<ContextualHelpButtonProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <button class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </button>
  )
}

export { ContextualHelpButton, ContextualHelpButtonProps }
