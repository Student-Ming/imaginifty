import '@/src/styles/globals.css'
import '@/src/styles/scss/globals.scss'
import type { AppProps } from 'next/app'
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LoadingProgress from '@/src/components/global/progress';
import { Provider } from 'react-redux';
import { GlobalLayout } from '@/src/components/global/globalLayout';
import { appWithTranslation, useTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import { wrapper } from '@/src/redux/store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps)
  const { i18n } = useTranslation()

  useEffect(() => {
    const localLanguage = localStorage.getItem('language') || 'zh-CN'
    i18n.changeLanguage(localLanguage);
  }, [i18n]);

  return (
    <Provider store={store}>
      <Providers>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <LoadingProgress />
            <GlobalLayout />
            <Component {...pageProps} />
          </NextThemesProvider>
        </NextUIProvider>
      </Providers>
    </Provider>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig);