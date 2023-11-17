import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/Layout.css";

import MainLayout from '../components/Layout/MainLayout';
import Head from 'next/head';

import { ThemeProvider } from '@mui/material';
import { AuthProvider } from '../context/AuthContext';
import theme from '../styles/theme';
import CartProvider from '../context/cart/CartProvider';
import { useRouter } from 'next/router';
import AdminLayout from '../components/Layout/AdminLayout';
import ProductsProvider from '../context/products/ProductsProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>2 Corazones y medio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <CartProvider>
            <AuthProvider>
              {/* render mainlayout if route is different to login and admin */}
              {router?.asPath !== '/admin' &&
              router?.asPath !== '/products/add' ? (
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              ) : (
                <AdminLayout>
                  <Component {...pageProps} />
                </AdminLayout>
              )}
            </AuthProvider>
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
