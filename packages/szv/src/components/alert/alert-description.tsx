import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './alert-description.css'

type AlertDescriptionProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const AlertDescription: ParentComponent<AlertDescriptionProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { AlertDescription, AlertDescriptionProps }
