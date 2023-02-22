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
import barlowRegular from "../fonts/Barlow-Regular.ttf"
import barlowMedium from "../fonts/Barlow-Medium.ttf"
import barlowBold from "../fonts/Barlow-Bold.ttf"
import oswaldRegular from "../fonts/Oswald-Regular.woff2"
import oswaldMedium from "../fonts/Oswald-Medium.woff2"
import oswaldBold from "../fonts/Oswald-Bold.woff2"

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
      src: `local("Oswald") url(${oswaldRegular})`,
    },
    {
      fontFamily: "Oswald",
      fontWeight: 500,
      src: `local("Oswald") url(${oswaldMedium})`,
    },
    {
      fontFamily: "Oswald",
      fontWeight: 700,
      src: `local("Oswald") url(${oswaldBold})`,
    },
    {
      fontFamily: "Barlow",
      fontWeight: 400,
      src: `local("Barlow") url(${barlowRegular})`,
    },
    {
      fontFamily: "Barlow",
      fontWeight: 500,
      src: `local("Barlow") url(${barlowMedium})`,
    },
    {
      fontFamily: "Barlow",
      fontWeight: 700,
      src: `local("Barlow") url(${barlowBold})`,
    },
  ],
});

