import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty/favicon.ico' : '/favicon.ico'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
