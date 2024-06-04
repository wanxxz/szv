import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './button.css'

type ButtonProps = Variants & JSX.ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: ParentComponent<ButtonProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class', 'variant', 'fill', 'outline', 'size'])

  return (
    <button
      class={clsx(
        variants({ variant: local.variant, fill: local.fill, outline: local.outline, size: local.size }),
        local.class
      )}
      {...others}
    >
      {local.children}
    </button>
  )
}

export { Button, ButtonProps }
