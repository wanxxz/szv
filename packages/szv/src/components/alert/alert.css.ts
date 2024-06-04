import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    borderRadius: openProps.radius2,
    borderWidth: openProps.borderSize1,
    borderStyle: 'solid',
    padding: openProps.sizeRelative5,
    display: 'grid',
    gridTemplateAreas: `"icon title" "icon description"`,
    gridTemplateColumns: `${openProps.sizeRelative8} auto`,
    columnGap: openProps.sizeRelative3,
    rowGap: openProps.sizeRelative3
  },
  variants: {
    variant: {
      default: {
        // TODO: theme
        backgroundColor: 'white',
        borderColor: openProps.gray4,
        color: openProps.gray7
      },
      destructive: {
        borderColor: openProps.red8,
        color: openProps.red8
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
