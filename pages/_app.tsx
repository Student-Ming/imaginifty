import '@/src/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import Providers from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import { NavBar } from '@/src/components/global/navbar';
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Providers>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <NavBar></NavBar>
            <Component {...pageProps} />
          </NextThemesProvider>
        </NextUIProvider>
      </Providers>
    </ClerkProvider>
  )
}

export default MyApp;