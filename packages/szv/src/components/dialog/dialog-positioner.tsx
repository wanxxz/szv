import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dialog-positioner.css'
import { useDialog } from './dialog-provider'

type DialogPositionerProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DialogPositioner: ParentComponent<DialogPositionerProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...dialog().positionerProps} {...others}>
      {local.children}
    </div>
  )
}

export { DialogPositioner, DialogPositionerProps }
