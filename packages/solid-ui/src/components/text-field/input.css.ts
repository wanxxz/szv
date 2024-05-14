import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {},
  variants: {
    size: {
      s: {
        fontSize: openProps.fontSize0
      },
      m: {
        fontSize: openProps.fontSize1
      },
      l: {
        fontSize: openProps.fontSize2
      },
      xl: {
        fontSize: openProps.fontSize3
      }
    }
  },
  defaultVariants: {
    size: 'm'
  }
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
