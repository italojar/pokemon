import type { AppProps } from 'next/app'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
