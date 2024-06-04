import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dialog-content.css'
import { useDialog } from './dialog-provider'

type DialogContentProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DialogContent: ParentComponent<DialogContentProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...dialog().contentProps} {...others}>
      {local.children}
    </div>
  )
}

export { DialogContent, DialogContentProps }
