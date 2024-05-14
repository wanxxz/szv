import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {},
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
