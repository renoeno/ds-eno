import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  transitions,
} from '@renodev/tokens-ds-eno'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    transitions,
  },
})

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: "Oswald",
      fontWeight: 400,
      src: 'local("Oswald"), url(/fonts/Oswald-Regular.woff2)',
    },
    {
      fontFamily: "Oswald",
      fontWeight: 500,
      src: 'local("Oswald"), url(/fonts/Oswald-Medium.woff2)',
    },
    {
      fontFamily: "Oswald",
      fontWeight: 700,
      src: 'local("Oswald"), url(/fonts/Oswald-Bold.woff2)',
    },
    {
      fontFamily: "Barlow",
      fontWeight: 400,
      src: 'local("Barlow"), url(/fonts/Barlow-Regular.ttf)',
    },
    {
      fontFamily: "Barlow",
      fontWeight: 500,
      src: 'local("Barlow"), url(/fonts/Barlow-Medium.ttf)',
    },
    {
      fontFamily: "Barlow",
      fontWeight: 700,
      src: 'local("Barlow"), url(/fonts/Barlow-Bold.ttf)',
    },
  ],
});

globalStyles()
