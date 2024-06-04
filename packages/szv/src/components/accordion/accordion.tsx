import * as accordion from '@zag-js/accordion'
import { normalizeProps, useMachine } from '@zag-js/solid'
import clsx from 'clsx'
import { createMemo, createUniqueId, splitProps, type JSX, type ParentComponent } from 'solid-js'
import { AccordionProvider } from './accordion-provider'
import { variants, type Variants } from './accordion.css'

type AccordionProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    collapsible?: boolean
    multiple?: boolean
  }

const Accordion: ParentComponent<AccordionProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class', 'collapsible', 'multiple'])
  const [state, send] = useMachine(
    accordion.machine({ id: createUniqueId(), collapsible: local.collapsible, multiple: local.multiple })
  )
  const api = createMemo(() => accordion.connect(state, send, normalizeProps))

  return (
    <AccordionProvider api={api}>
      <div class={clsx(variants(), local.class)} {...api().rootProps} {...others}>
        {local.children}
      </div>
    </AccordionProvider>
  )
}

export { Accordion, AccordionProps }
