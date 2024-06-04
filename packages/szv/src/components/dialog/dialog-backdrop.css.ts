import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    backgroundColor: `hsl(${openProps.gray9Hsl} / 80%)`
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
