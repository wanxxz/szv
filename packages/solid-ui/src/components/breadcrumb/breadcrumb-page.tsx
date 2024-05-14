import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './breadcrumb-page.css'

type BreadcrumbPageProps = Variants & JSX.HTMLAttributes<HTMLSpanElement> & {}

const BreadcrumbPage: ParentComponent<BreadcrumbPageProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <span role="link" aria-disabled="true" aria-current="page" class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </span>
  )
}

export { BreadcrumbPage }
