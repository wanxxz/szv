import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    position: 'absolute',
    right: openProps.size4,
    top: openProps.size4,
    border: 'none',
    background: 'none',
    display: 'block',
    padding: 0
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
