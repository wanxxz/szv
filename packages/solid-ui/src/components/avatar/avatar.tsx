import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './avatar.css'

type AvatarProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const Avatar: ParentComponent<AvatarProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { Avatar, AvatarProps }
