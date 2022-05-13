import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {createTheme, NextUIProvider} from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

const lightTheme = createTheme({
  type: "light"
});

const darkTheme = createTheme({
  type: "dark"
});

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);
  return <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}><Component {...pageProps} /></NextUIProvider>
}

export default MyApp
