import clsx from 'clsx'
import { Match, Switch, splitProps, type JSX, type ParentComponent } from 'solid-js'
import { useAccordionItem } from './accordion-item-provider'
import { useAccordion } from './accordion-provider'
import { variants, type Variants } from './accordion-trigger.css'
import { ChevronDown, ChevronUp } from 'lucide-solid'
import openProps from 'open-props'

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
      {local.children}
      <Switch>
        <Match when={accordion().getItemState({ value: accordionItem.value }).expanded}>
          <ChevronUp size={openProps.sizeRelative8} />
        </Match>
        <Match when={!accordion().getItemState({ value: accordionItem.value }).expanded}>
          <ChevronDown />
        </Match>
      </Switch>
    </button>
  )
}

export { AccordionTrigger, AccordionTriggerProps }
