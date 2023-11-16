import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content='Productos naturales para el cuidado de tu piel. Hechos con amor.'
        />
        <meta property='og:title' content='Dos corazones y medio' />
        <meta
          property='og:description'
          content='Productos naturales para el cuidado de tu piel. Hechos con amor.'
        />
        <meta
          property='og:image'
          // image from the public folder
          content='public/logo.png'
        />
        <meta property='og:url' content='TODO: SET THE URL' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
