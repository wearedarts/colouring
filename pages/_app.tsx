import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { PaletteProvider } from '../context/PaletteProvider';

import { AppTheme, GlobalStyle } from '../Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={AppTheme}>
      <PaletteProvider>
        <GlobalStyle />
        <Component {...pageProps} />{' '}
      </PaletteProvider>
    </ThemeProvider>
  );
}
export default MyApp;
