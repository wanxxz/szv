import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: openProps.sizeRelative5,
    overflowWrap: 'break-word',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    color: openProps.gray6
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
