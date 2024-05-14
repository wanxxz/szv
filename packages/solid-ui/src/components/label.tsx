import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './label.css'

type LabelProps = Variants & JSX.LabelHTMLAttributes<HTMLLabelElement> & {}

const Label: ParentComponent<LabelProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <label class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </label>
  )
}

export { Label, LabelProps }
