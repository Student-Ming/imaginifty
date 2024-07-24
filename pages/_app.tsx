import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import { NavBar } from '@/src/components/global/navbar';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LoadingProgress from '@/src/components/global/progress';
import { store, persistor } from '@/src/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginDialog from '@/src/components/login/loginDialog';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Providers>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
              <LoadingProgress />
              <NavBar></NavBar>
              <Component {...pageProps} />
              <LoginDialog />
            </NextThemesProvider>
          </NextUIProvider>
        </Providers>
      </PersistGate>
    </Provider>
  )
}

export default MyApp;