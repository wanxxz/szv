import clsx from 'clsx'
import { ChevronRight } from 'lucide-solid'
import openProps from 'open-props'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './breadcrumb-separator.css'

type BreadcrumbSeparatorProps = Variants & JSX.HTMLAttributes<HTMLLIElement> & {}

const BreadcrumbSeparator: ParentComponent<BreadcrumbSeparatorProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <li role="presentation" aria-hidden="true" class={clsx(variants(), local.class)} {...others}>
      {local.children ?? <ChevronRight size={openProps.sizeRelative7} />}
    </li>
  )
}

export { BreadcrumbSeparator, type BreadcrumbSeparatorProps }
