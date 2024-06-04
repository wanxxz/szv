import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    padding: `${openProps.sizeRelative2} ${openProps.sizeRelative5}`,
    borderRadius: openProps.radius4,
    borderWidth: 0,
    fontFamily: openProps.fontSans
  },
  variants: {
    variant: {
      accent: {},
      primary: {},
      secondary: {},
      negative: {}
    },
    fill: {
      true: {
        color: openProps.gray0
      }
    },
    outline: {
      true: {
        backgroundColor: openProps.gray0,
        borderWidth: openProps.borderSize2,
        borderStyle: 'solid'
      }
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
  defaultVariants: { variant: 'accent', fill: true, outline: false, size: 'm' },
  compoundVariants: [
    { variants: { variant: 'secondary', fill: true }, style: {} },

    { variants: { variant: 'accent', fill: true }, style: { backgroundColor: openProps.blue7 } },
    { variants: { variant: 'primary', fill: true }, style: { backgroundColor: openProps.gray10 } },
    {
      variants: { variant: 'secondary', fill: true },
      style: { backgroundColor: openProps.gray2, color: openProps.gray12 }
    },
    { variants: { variant: 'negative', fill: true }, style: { backgroundColor: openProps.red7 } },

    { variants: { variant: 'accent', outline: true }, style: { color: openProps.blue7, borderColor: openProps.blue7 } },
    {
      variants: { variant: 'primary', outline: true },
      style: { color: openProps.gray10, borderColor: openProps.gray10 }
    },
    {
      variants: { variant: 'secondary', outline: true },
      style: { color: openProps.gray12, borderColor: openProps.gray2 }
    },
    { variants: { variant: 'negative', outline: true }, style: { color: openProps.red7, borderColor: openProps.red7 } }
  ]
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
