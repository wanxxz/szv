import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { useAccordionItem } from './accordion-item-provider'
import { useAccordion } from './accordion-provider'
import { AccordionTriggerIndicator } from './accordion-trigger-indicator'
import { variants, type Variants } from './accordion-trigger.css'

type AccordionTriggerProps = Variants & JSX.ButtonHTMLAttributes<HTMLButtonElement> & {}

const AccordionTrigger: ParentComponent<AccordionTriggerProps> = props => {
  const accordion = useAccordion()
  const accordionItem = useAccordionItem()
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <button
      class={clsx(variants(), local.class)}
      {...accordion().getItemTriggerProps({ value: accordionItem.value })}
      {...others}
    >
      <span>{local.children}</span>
      <AccordionTriggerIndicator />
    </button>
  )
}

export { AccordionTrigger, AccordionTriggerProps }
