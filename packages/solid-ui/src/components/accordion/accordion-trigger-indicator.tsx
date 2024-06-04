import clsx from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-solid'
import { Match, Switch, type Component, type JSX } from 'solid-js'
import { useAccordionItem } from './accordion-item-provider'
import { useAccordion } from './accordion-provider'
import { variants, type Variants } from './accordion-trigger-indicator.css'

type AccordionTriggerIndicatorProps = Variants & JSX.HTMLAttributes<HTMLElement> & {}

const AccordionTriggerIndicator: Component<AccordionTriggerIndicatorProps> = props => {
  const accordion = useAccordion()
  const accordionItem = useAccordionItem()

  return (
    <Switch>
      <Match when={accordion().getItemState({ value: accordionItem.value }).expanded}>
        <ChevronUp class={clsx(variants(), props.class)} />
      </Match>
      <Match when={!accordion().getItemState({ value: accordionItem.value }).expanded}>
        <ChevronDown class={clsx(variants(), props.class)} />
      </Match>
    </Switch>
  )
}

export { AccordionTriggerIndicator, AccordionTriggerIndicatorProps }
