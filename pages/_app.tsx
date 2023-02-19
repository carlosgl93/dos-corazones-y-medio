import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/Layout.css";

// import UIStateProvider from "../state/ui/UIStateProvider";

import MainLayout from "../components/Layout/MainLayout";
import Head from "next/head";

import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "../context/AuthContext";
import theme from "../styles/theme";
import CartProvider from "../context/cart/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>2 corazones y medio</title>
      </Head>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthProvider>
        </ThemeProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
