import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Breadcrumb } from './breadcrumb'
import { BreadcrumbEllipsis } from './breadcrumb-ellipsis'
import { BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbLink } from './breadcrumb-link'
import { BreadcrumbList } from './breadcrumb-list'
import { BreadcrumbPage } from './breadcrumb-page'
import { BreadcrumbSeparator } from './breadcrumb-separator'

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs']
} as Meta<ComponentProps<typeof Breadcrumb>>

const BreadcrumbStory: StoryObj<ComponentProps<typeof Breadcrumb>> = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/story/components-breadcrumb--breadcrumb">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/story/components-breadcrumb--breadcrumb-separator">
            Breadcrumb Separator
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { BreadcrumbStory as Breadcrumb }

export default meta
