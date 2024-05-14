import clsx from 'clsx'
import { Show, createSignal, splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './avatar-image.css'

type AvatarImageProps = Variants & JSX.ImgHTMLAttributes<HTMLImageElement> & {}

const AvatarImage: ParentComponent<AvatarImageProps> = props => {
  const [loadingStatus, setLoadingStatus] = createSignal<'idle' | 'loaded' | 'error'>('idle')
  const [local, others] = splitProps(props, ['children', 'class'])

  const image = new Image()
  image.onload = () => setLoadingStatus('loaded')
  image.onerror = () => setLoadingStatus('error')
  image.src = props.src as never

  return (
    <Show when={loadingStatus() === 'loaded'}>
      <img class={clsx(variants(), local.class)} {...others}>
        {local.children}
      </img>
    </Show>
  )
}

export { AvatarImage }
