import { createGlobalStyle } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

export const AppTheme: DefaultTheme = {
  colours: {
    // Brand Colours
    white: '#ffffff',
    cream: '#f9f2ec',
    orange: '#ff7f30',
    orange_dark: '#cc5e20',
    blue: '#425cc7',
    green: '#095157',
    purple: '#532b3a',
    grey_dark: '#000000e6',
    grey_light: '#3c3c3c',
    black: '#00000033',
  },

  screenSizes: {
    smallPhoneOnly: '@media (max-width: 349px)',
    phonePlus: '@media (min-width: 350px)',
    tabletPortraitPlus: '@media (min-width: 600px)',
    tabletLandscapePlus: '@media (min-width: 900px)',
    desktopPlus: '@media (min-width: 1200px),',
  },

  gutters: {
    small: '1rem',
    large: '2rem',
  },
};

export const GlobalStyle = createGlobalStyle`

  //
  /* Fonts */
  //
  @font-face {
    font-family: 'Poppins';
    src: url('/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }


  //
  /* Reset adapted from https://github.com/hankchizljaw/modern-css-reset */
  //

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul,
  ol,
  legend {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  fieldset,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  //
  /* Global defaults */
  //

  body {
    background-color: ${(props) => props.theme.colours.purple};
    color: ${(props) => props.theme.colours.cream};
    font-family: Poppins, sans-serif;
    font-size: 100%;

    --gutter-width: ${(props) => props.theme.gutters.small};

    ${(props) => props.theme.screenSizes.phonePlus} {
      --gutter-width: ${(props) => props.theme.gutters.large};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-style: normal;
    font-weight: bold;
  }

`;