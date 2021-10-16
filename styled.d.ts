import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      white: string;
      cream: string;
      orange: string;
      orange_dark: string;
      blue: string;
      green: string;
      purple: string;
      grey_dark: string;
      grey_light: string;
      black: string;
    };

    screenSizes: {
      smallPhoneOnly: string;
      phonePlus: string;
      tabletPortraitPlus: string;
      tabletLandscapePlus: string;
      desktopPlus: string;
    };

    gutters: {
      small: string;
      large: string;
    };
  }
}
