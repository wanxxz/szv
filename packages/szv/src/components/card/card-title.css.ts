import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    fontSize: openProps.fontSize4,
    fontWeight: openProps.fontWeight6,
    lineHeight: openProps.fontLineheight0,
    letterSpacing: openProps.fontLetterspacing0
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
