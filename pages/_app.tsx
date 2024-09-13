import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LoadingProgress from '@/src/components/global/progress';
import { Provider } from 'react-redux';
import LoginDialog from '@/src/components/login/loginDialog';
import { GlobalLayout } from '@/src/components/global/globalLayout';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import { wrapper } from '@/src/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps)

  return (
    <Provider store={store}>
      <Providers>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <LoadingProgress />
            <GlobalLayout />
            <Component {...pageProps} />
            <LoginDialog />
          </NextThemesProvider>
        </NextUIProvider>
      </Providers>
    </Provider>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig);