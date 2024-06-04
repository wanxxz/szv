import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    borderBottomWidth: openProps.borderSize1,
    borderBottomStyle: 'solid',
    borderBottomColor: openProps.gray3
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
