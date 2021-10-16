import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { AppTheme, GlobalStyle } from '../Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  );
}
export default MyApp;
