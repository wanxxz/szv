import { createVar } from '@vanilla-extract/css'
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const backgroundColor = createVar()
const filter = createVar()

const variants = recipe({
  base: {
    padding: `${openProps.sizeRelative2} ${openProps.sizeRelative5}`,
    borderRadius: openProps.radius4,
    borderWidth: 0,
    fontFamily: openProps.fontSans,
    selectors: {
      '&:is(:hover, :focus)': {
        cursor: 'pointer',
        filter: filter
      }
    }
  },
  variants: {
    variant: {
      accent: {},
      primary: {},
      secondary: {},
      negative: {},
      icon: {
        padding: 'unset',
        borderRadius: 'unset',
        borderWidth: 'unset',
        fontFamily: 'unset',
        height: openProps.sizeRelative7,
        width: openProps.sizeRelative7
      }
    },
    fill: {
      true: {
        backgroundColor: backgroundColor,
        color: openProps.gray0,
        vars: {
          [filter]: `brightness(1.05)`
        }
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
    { variants: { variant: 'accent', fill: true }, style: { vars: { [backgroundColor]: openProps.blue7 } } },
    { variants: { variant: 'primary', fill: true }, style: { vars: { [backgroundColor]: openProps.gray10 } } },
    {
      variants: { variant: 'secondary', fill: true },
      style: { vars: { [backgroundColor]: openProps.gray2 }, color: openProps.gray12 }
    },
    { variants: { variant: 'negative', fill: true }, style: { vars: { [backgroundColor]: openProps.red7 } } },
    {
      variants: { variant: 'icon', fill: true },
      style: {
        color: openProps.gray12,
        vars: {
          [backgroundColor]: openProps.gray3
        }
      }
    },
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
