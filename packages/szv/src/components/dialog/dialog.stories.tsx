import { type Meta, type StoryObj } from '@storybook/html'
import { X } from 'lucide-solid'
import { type ComponentProps } from 'solid-js'
import { Button } from '../button'
import { Dialog } from './dialog'
import { DialogBackdrop } from './dialog-backdrop'
import { DialogCloseTrigger } from './dialog-close-trigger'
import { DialogContent } from './dialog-content'
import { DialogDescription } from './dialog-description'
import { DialogPositioner } from './dialog-positioner'
import { DialogTitle } from './dialog-title'
import { DialogTrigger } from './dialog-trigger'

const meta = {
  title: 'Components/Dialog'
} as Meta<ComponentProps<typeof Dialog>>

const DialogStory: StoryObj<ComponentProps<typeof Dialog>> = {
  render: () => (
    <Dialog>
      <DialogTrigger as={Button}>open</DialogTrigger>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent>
          <DialogTitle>title</DialogTitle>
          <DialogDescription>description</DialogDescription>
          <DialogCloseTrigger as={Button} variant="icon">
            <X size="100%" />
          </DialogCloseTrigger>
        </DialogContent>
      </DialogPositioner>
    </Dialog>
  )
}

export { DialogStory as Dialog }

export default meta
