import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: 0,
    paddingBlock: openProps.sizeRelative5,
    border: 'none',
    backgroundColor: 'inherit',
    fontWeight: openProps.fontWeight6,
    ':hover': {
      textDecorationLine: 'underline'
    }
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
