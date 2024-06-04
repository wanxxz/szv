import * as accordion from '@zag-js/accordion'
import { createContext, useContext, type Accessor, type ParentComponent } from 'solid-js'

const AccordionContext = createContext()
const useAccordion = () => useContext(AccordionContext) as Accessor<accordion.Api>

type AccordionProviderProps = {
  api: Accessor<accordion.Api>
}

const AccordionProvider: ParentComponent<AccordionProviderProps> = props => {
  return <AccordionContext.Provider value={props.api}>{props.children}</AccordionContext.Provider>
}

export { AccordionProvider, AccordionProviderProps, useAccordion }
