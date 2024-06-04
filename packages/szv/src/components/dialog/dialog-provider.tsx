import * as dialog from '@zag-js/dialog'
import { createContext, useContext, type Accessor, type ParentComponent } from 'solid-js'

const DialogContext = createContext()
const useDialog = () => useContext(DialogContext) as Accessor<dialog.Api>

type DialogProviderProps = {
  api: Accessor<dialog.Api>
}

const DialogProvider: ParentComponent<DialogProviderProps> = props => {
  return <DialogContext.Provider value={props.api}>{props.children}</DialogContext.Provider>
}

export { DialogProvider, DialogProviderProps, useDialog }
