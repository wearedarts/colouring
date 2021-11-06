import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      cream: string;
      purple: string;
      turquoise: string;
      turquoise_dark: string;
      green: string;
      pink: string;

      blue: string;
      orange: string;

      white: string;
      grey: string;
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
