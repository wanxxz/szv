import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './skeleton.css'

type SkeletonProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const Skeleton: ParentComponent<SkeletonProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { Skeleton, SkeletonProps }
