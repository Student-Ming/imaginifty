import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1, user-scalable=no"></meta>
        <link rel="icon" href={process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty/favicon.ico' : '/favicon.ico'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
