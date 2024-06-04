import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Accordion } from './accordion'
import { AccordionContent } from './accordion-content'
import { AccordionItem } from './accordion-item'
import { AccordionTrigger } from './accordion-trigger'

const meta = {
  title: 'Components/Accordion',
  component: Accordion
} as Meta<ComponentProps<typeof Accordion>>

const AccordionStory: StoryObj<ComponentProps<typeof Accordion>> = {
  render: () => (
    <Accordion>
      <AccordionItem value="1">
        <AccordionTrigger>1</AccordionTrigger>
        <AccordionContent>...</AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>2</AccordionTrigger>
        <AccordionContent>...</AccordionContent>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>3</AccordionTrigger>
        <AccordionContent>...</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { AccordionStory as Accordion }
export default meta
