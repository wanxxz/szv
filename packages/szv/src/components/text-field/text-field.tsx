import clsx from 'clsx'
import { splitProps, type Component, type JSX } from 'solid-js'
import { Helptext } from './help-text'
import { Input } from './input'
import { Label } from './label'
import { variants, type Variants } from './text-field.css'

type TextfieldProps = Variants &
  JSX.InputHTMLAttributes<HTMLInputElement> &
  JSX.LabelHTMLAttributes<HTMLLabelElement> &
  JSX.HTMLAttributes<HTMLSpanElement> & {}

const Textfield: Component<TextfieldProps> = props => {
  const [local, others] = splitProps(props, ['class', 'size'])

  return (
    <div class={clsx(variants({ size: local.size }), local.class)}>
      <Label {...props} />
      <Input {...props} />
      <Helptext {...props} />
    </div>
  )
}

export { Textfield, TextfieldProps }
