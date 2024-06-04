import clsx from 'clsx'
import { splitProps, type Component, type JSX } from 'solid-js'
import { variants, type Variants } from './input.css'

type InputProps = Variants & JSX.InputHTMLAttributes<HTMLInputElement> & {}

const Input: Component<InputProps> = props => {
  const [local, others] = splitProps(props, ['class', 'size'])

  return <input class={clsx(variants({ size: local.size }), local.class)} {...others} />
}

export { Input, InputProps }
