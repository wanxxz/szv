import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dialog-backdrop.css'
import { useDialog } from './dialog-provider'

type DialogBackdropProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DialogBackdrop: ParentComponent<DialogBackdropProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...dialog().backdropProps} {...others}>
      {local.children}
    </div>
  )
}

export { DialogBackdrop, DialogBackdropProps }
