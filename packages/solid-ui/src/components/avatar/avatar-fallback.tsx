import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './avatar-fallback.css'

type AvatarFallbackProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const AvatarFallback: ParentComponent<AvatarFallbackProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { AvatarFallback }
