import { globalStyle } from '@vanilla-extract/css'
import openProps from 'open-props'

globalStyle('body', {
  fontFamily: openProps.fontSans,
  margin: 0
})
