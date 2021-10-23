import "../styles/globals.css";
import "../styles/destinations/index.css";
import "../styles/crew/index.css";
import "../styles/home/home.css";
import "../styles/tech/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
