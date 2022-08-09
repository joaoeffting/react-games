import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { NavBar } from "../src/components/UI";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar appName="React Games" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
