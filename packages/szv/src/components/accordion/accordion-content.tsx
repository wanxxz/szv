import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './accordion-content.css'
import { useAccordionItem } from './accordion-item-provider'
import { useAccordion } from './accordion-provider'

type AccordionContentProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const AccordionContent: ParentComponent<AccordionContentProps> = props => {
  const accordion = useAccordion()
  const accordionItem = useAccordionItem()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div
      class={clsx(variants(), local.class)}
      {...accordion().getItemContentProps({ value: accordionItem.value })}
      {...others}
    >
      {local.children}
    </div>
  )
}

export { AccordionContent, AccordionContentProps }
