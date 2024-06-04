import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dialog-description.css'
import { useDialog } from './dialog-provider'

type DialogDescriptionProps = Variants & JSX.HTMLAttributes<HTMLParagraphElement> & {}

const DialogDescription: ParentComponent<DialogDescriptionProps> = props => {
  const dialog = useDialog()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <p class={clsx(variants(), local.class)} {...dialog().descriptionProps} {...others}>
      {local.children}
    </p>
  )
}

export { DialogDescription, DialogDescriptionProps }
