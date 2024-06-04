import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: openProps.size5
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
