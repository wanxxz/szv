import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    padding: `${openProps.sizeRelative2} ${openProps.sizeRelative5}`,
    borderRadius: openProps.radius4,
    borderWidth: 0,
    display: 'inline-block',
    cursor: 'default',
    fontFamily: openProps.fontSans,
    color: openProps.gray0
  },
  variants: {
    variant: {
      accent: {},
      neutral: {},
      informative: {},
      negative: {},
      positive: {},
      notice: {}
    },
    size: {
      s: {
        fontSize: openProps.fontSize0
      },
      m: {
        fontSize: openProps.fontSize1
      },
      l: {
        fontSize: openProps.fontSize2
      },
      xl: {
        fontSize: openProps.fontSize3
      }
    }
  },
  defaultVariants: {
    variant: 'accent',
    size: 'm'
  },
  compoundVariants: [
    { variants: { variant: 'accent' }, style: { backgroundColor: openProps.blue7 } },
    { variants: { variant: 'neutral' }, style: { backgroundColor: openProps.gray6 } },
    { variants: { variant: 'informative' }, style: { backgroundColor: openProps.blue6 } },
    { variants: { variant: 'negative' }, style: { backgroundColor: openProps.red7 } },
    { variants: { variant: 'positive' }, style: { backgroundColor: openProps.green10 } },
    { variants: { variant: 'notice' }, style: { backgroundColor: openProps.orange5 } }
  ]
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
