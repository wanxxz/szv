import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './breadcrumb-list.css'

type BreadcrumbListProps = Variants & JSX.HTMLAttributes<HTMLOListElement> & {}

const BreadcrumbList: ParentComponent<BreadcrumbListProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <ol class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </ol>
  )
}

export { BreadcrumbList, type BreadcrumbListProps }
