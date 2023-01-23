import "../styles/globals.css";
import type { AppProps } from "next/app";
// import UIStateProvider from "../state/ui/UIStateProvider";

import MainLayout from "../components/Layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <UIStateProvider>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    // </UIStateProvider>
  );
}

export default MyApp;
