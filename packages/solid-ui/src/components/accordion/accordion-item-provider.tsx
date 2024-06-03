import { createContext, useContext, type ParentComponent } from 'solid-js'

const AccordionItemContext = createContext()
const useAccordionItem = () => useContext(AccordionItemContext) as AccordionItemProviderProps

type AccordionItemProviderProps = {
  value: string
  disabled?: boolean
}

const AccordionItemProvider: ParentComponent<AccordionItemProviderProps> = props => {
  return (
    <AccordionItemContext.Provider value={{ value: props.value, disabled: props.disabled }}>
      {props.children}
    </AccordionItemContext.Provider>
  )
}

export { AccordionItemProvider, AccordionItemProviderProps, useAccordionItem }
