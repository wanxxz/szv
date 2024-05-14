import { calc } from '@vanilla-extract/css-utils'
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {},
  variants: {
    size: {
      s: {
        fontSize: calc(openProps.fontSize0).multiply(0.75).toString()
      },
      m: {
        fontSize: calc(openProps.fontSize1).multiply(0.75).toString()
      },
      l: {
        fontSize: calc(openProps.fontSize2).multiply(0.75).toString()
      },
      xl: {
        fontSize: calc(openProps.fontSize3).multiply(0.75).toString()
      }
    }
  },
  defaultVariants: {
    size: 'm'
  }
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
