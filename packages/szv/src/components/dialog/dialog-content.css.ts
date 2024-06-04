import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

// TODO: color theme
const variants = recipe({
  base: {
    vars: {
      '--shadow-color': openProps.shadowColor,
      '--shadow-strength': openProps.shadowStrength
    },
    gap: openProps.sizeRelative7,
    borderWidth: openProps.borderSize1,
    borderStyle: 'solid',
    borderColor: openProps.gray3,
    borderRadius: openProps.radius2,
    padding: openProps.size4,
    boxShadow: openProps.shadow2,
    backgroundColor: openProps.gray0,
    transform: 'translate(-50%,-50%)'
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
