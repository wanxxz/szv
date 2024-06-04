import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    marginTop: openProps.sizeRelative3,
    fontSize: openProps.fontSize0,
    color: openProps.stone7
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
