import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtm from '../utils/gtm';
import * as gtag from '../utils/gtag';
import Navbar_sec from "@/sections/HomeSection/Navbar_sec";
import { Toaster} from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
      const analyticsLoader = (url: String) => {
        gtm.pageview(url);
        gtag.pageview(url);
      };
      gtm.init();
      gtag.init();

      gtm.pageview(router.asPath);
      gtag.pageview(router.asPath);

      router.events.on("routeChangeComplete", analyticsLoader);
      return () => router.events.off("routeChangeComplete", analyticsLoader);
  }, []);
  return <>
  <Navbar_sec />
  <Component {...pageProps} />
  <Toaster />
  </>;
}
