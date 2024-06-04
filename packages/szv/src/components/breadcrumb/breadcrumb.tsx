import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './breadcrumb.css'

type BreadcrumbProps = Variants & JSX.HTMLAttributes<HTMLElement> & {}

const Breadcrumb: ParentComponent<BreadcrumbProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <nav aria-label="breadcrumb" class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </nav>
  )
}

export { Breadcrumb, type BreadcrumbProps }
