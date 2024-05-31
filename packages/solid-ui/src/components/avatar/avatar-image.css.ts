import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    borderRadius: '100%',
    height: '100%',
    width: '100%',
    display: 'block'
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
