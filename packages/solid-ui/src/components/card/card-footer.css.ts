import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    paddingLeft: openProps.size5,
    paddingRight: openProps.size5,
    paddingBottom: openProps.size5,
    display: 'flex',
    alignItems: 'center'
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
