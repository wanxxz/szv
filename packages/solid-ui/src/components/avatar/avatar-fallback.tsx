import clsx from 'clsx'
import { Show, splitProps, useContext, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './avatar-fallback.css'
import { AvatarContext } from './avatar-provider'

type AvatarFallbackProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const AvatarFallback: ParentComponent<AvatarFallbackProps> = props => {
  const [context, updateContext] = useContext(AvatarContext)
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <Show when={context.loadingStatus === 'error'}>
      <div class={clsx(variants(), local.class)} {...others}>
        {local.children}
      </div>
    </Show>
  )
}

export { AvatarFallback, type AvatarFallbackProps }
