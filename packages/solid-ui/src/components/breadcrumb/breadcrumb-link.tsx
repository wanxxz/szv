import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { Polymorphic } from '../polymorphic'
import { variants, type Variants } from './breadcrumb-link.css'

type BreadcrumbLinkProps = Variants & JSX.ButtonHTMLAttributes<HTMLAnchorElement> & {}

const BreadcrumbLink: ParentComponent<BreadcrumbLinkProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <a class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </a>
  )
}

export { BreadcrumbLink }
