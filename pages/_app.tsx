import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { PaletteProvider } from '../context/PaletteProvider';
import { AppTheme, GlobalStyle } from '../Theme';
import '../fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <PaletteProvider>
        <Component {...pageProps} />
      </PaletteProvider>
    </ThemeProvider>
  );
}
export default MyApp;
