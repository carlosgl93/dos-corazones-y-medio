import "../styles/globals.css";
import type { AppProps } from "next/app";
// import UIStateProvider from "../state/ui/UIStateProvider";

import MainLayout from "../components/Layout/MainLayout";
import Head from "next/head";

import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>2 corazones y medio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
