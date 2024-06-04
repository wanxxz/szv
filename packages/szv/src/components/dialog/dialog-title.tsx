import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { useDialog } from './dialog-provider'
import { variants, type Variants } from './dialog-title.css'

type DialogTitleProps = Variants & JSX.HTMLAttributes<HTMLHeadingElement> & {}

const DialogTitle: ParentComponent<DialogTitleProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <h2 class={clsx(variants(), local.class)} {...dialog().titleProps} {...others}>
      {local.children}
    </h2>
  )
}

export { DialogTitle, DialogTitleProps }
