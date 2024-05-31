import clsx from 'clsx'
import { Show, splitProps, useContext, type Component, type JSX } from 'solid-js'
import { variants, type Variants } from './avatar-image.css'
import { AvatarContext } from './avatar-provider'

type AvatarImageProps = Variants & JSX.ImgHTMLAttributes<HTMLImageElement> & {}

const AvatarImage: Component<AvatarImageProps> = props => {
  const [context, updateContext] = useContext(AvatarContext)
  const [local, others] = splitProps(props, ['class'])

  const image = new Image()
  image.onload = () => updateContext({ loadingStatus: 'loaded' })
  image.onerror = () => updateContext({ loadingStatus: 'error' })
  image.src = props.src as never

  return (
    <Show when={context.loadingStatus === 'loaded'}>
      <img class={clsx(variants(), local.class)} {...others} />
    </Show>
  )
}

export { AvatarImage, type AvatarImageProps }
