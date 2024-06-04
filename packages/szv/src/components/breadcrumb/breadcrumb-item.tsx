import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './breadcrumb-item.css'

type BreadcrumbItemProps = Variants & JSX.HTMLAttributes<HTMLLIElement> & {}

const BreadcrumbItem: ParentComponent<BreadcrumbItemProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <li class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </li>
  )
}

export { BreadcrumbItem, BreadcrumbItemProps }
