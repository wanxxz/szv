import { style } from '@vanilla-extract/css'
import clsx from 'clsx'
import { MoreHorizontal } from 'lucide-solid'
import openProps from 'open-props'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants, classnames } from './breadcrumb-ellipsis.css'

type BreadcrumbEllipsisProps = Variants & JSX.HTMLAttributes<HTMLSpanElement> & {}

const BreadcrumbEllipsis: ParentComponent<BreadcrumbEllipsisProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <span role="presentation" aria-hidden="true" class={clsx(variants(), local.class)} {...others}>
      <MoreHorizontal size={openProps.sizeRelative4} />
      <span class={classnames.text}>More</span>
    </span>
  )
}

export { BreadcrumbEllipsis }
