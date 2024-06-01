import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    vars: {
      '--shadow-color': openProps.shadowColor,
      '--shadow-strength': openProps.shadowStrength
    },
    boxShadow: openProps.shadow2,
    borderRadius: openProps.radius2,
    borderWidth: openProps.borderSize1,
    borderColor: openProps.gray3,
    borderStyle: 'solid',
    width: openProps.size15,
    color: openProps.gray10
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
