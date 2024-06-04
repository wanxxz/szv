import { Toast } from './toast'
import { ToastProvider, useToast } from './toast-provider'

const ToastButton = () => {
  const toast = useToast()
  const onclick = () => toast?.().create({ title: '!', description: '@' })

  return <button onclick={onclick}>toast!</button>
}

export const Default = {}

export default {
  title: 'Components/Toast',
  component: Toast,
  render: () => {
    return (
      <ToastProvider placement="bottom-end">
        <ToastButton />
      </ToastProvider>
    )
  }
}
