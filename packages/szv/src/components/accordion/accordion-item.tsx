import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { AccordionItemProvider } from './accordion-item-provider'
import { variants, type Variants } from './accordion-item.css'
import { useAccordion } from './accordion-provider'

type AccordionItemProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    value: string
    disabled?: boolean
  }

const AccordionItem: ParentComponent<AccordionItemProps> = props => {
  const accordion = useAccordion()
  const [local, others] = splitProps(props, ['children', 'class', 'value', 'disabled'])

  return (
    <AccordionItemProvider value={local.value} disabled={local.disabled}>
      <div class={clsx(variants(), local.class)} {...accordion().getItemProps({ value: local.value })} {...others}>
        {local.children}
      </div>
    </AccordionItemProvider>
  )
}

export { AccordionItem, AccordionItemProps }
