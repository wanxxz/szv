import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './avatar.css'
import { AvatarProvider } from './avatar-provider'

type AvatarProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const Avatar: ParentComponent<AvatarProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <AvatarProvider>
      <div class={clsx(variants(), local.class)} {...others}>
        {local.children}
      </div>
    </AvatarProvider>
  )
}

export { Avatar, type AvatarProps }
