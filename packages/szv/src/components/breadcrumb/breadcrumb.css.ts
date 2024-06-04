import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    fontSize: openProps.fontSize0
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
