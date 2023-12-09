import Head from "next/head";
import { useEffect, useMemo } from "react";
import "../styles/globals.css";
import { Rubik } from "next/font/google";

import TiktokPixel from "tiktok-pixel";
import { Toaster } from "react-hot-toast";

import { StateContext } from "../context/StateContext";
import { FormStateContext } from "./../context/FormStateContext";
import { LoadingStateContext } from "./../context/LoadingContext";

import * as fbq from "../lib/fpixel";
import { FacebookBrowser, FbServer } from "../components/analytics";
import {generateUniqueEventID} from '../lib';


const RubikFont = Rubik({ subsets: ["hebrew"], variable: "--font-rubik" });

function MyApp({ Component, pageProps }) {

  const website_title = process.env.NEXT_PUBLIC_WEBSITE_TITLE;


  const uniqueEventID = generateUniqueEventID();


  const options = useMemo(() => {
    return {
      debug: true, // enable logs
    };
  }, []);
  
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === "true") {
      fbq.pageview();
    }
    if (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CONTROLER === "true") {
      TiktokPixel.init(process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID, options);
    }
  }, [options]);
  




  return (
    <>
      <Head>
        <title>{`${website_title}`}</title>
        <link rel="icon" href={process.env.NEXT_PUBLIC_WEBSITE_FAVICON} />
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_WEBSITE_META}
        />
      </Head>

      <StateContext>
        <FormStateContext>
          <LoadingStateContext>
            <FacebookBrowser eventId={uniqueEventID} />
            <FbServer eventId={uniqueEventID} />
            <main className={`${RubikFont.variable} font-sans`}>
              <Component {...pageProps} />
            </main>
            <Toaster position="top-center" reverseOrder={false} />
          </LoadingStateContext>
        </FormStateContext>
      </StateContext>
    </>
  );
}
export default MyApp;



// *** could be usefull ***

// import Script from "next/script";
// import { useRouter } from "next/router";
// import { Layout } from "../components";

// import { usePathname } from 'next/navigation'
// import TagManager, {tagManagerArgs } from 'react-gtm-module'

// const pathname = usePathname()
// const [loaded, setLoaded] = useState(false)
// const tagManagerArgs = {
//   gtmId
// };

// useEffect(() => {
//   TagManager.initialize(tagManagerArgs);
// }, []);

// const [thisIsThePath, setThisIsThePath] = useState('')
// const [renderPathname, setRenderPathname] = useState('')

// useEffect(() => {
//   const handleRouteChange = (url) => {
//     if (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_CONTROLER === "true" ) {
//       fbq.pageview();
//       console.log('i fires', pathname );
//       setRenderPathname(pathname)
//     }
//   };

//   router.events.on("routeChangeComplete", handleRouteChange);

//   return () => {
//     router.events.off("routeChangeComplete", handleRouteChange);
//   };
// }, [pathname, loaded]);



{
  /* {process.env.NEXT_PUBLIC_GTM__CONTROLLER === 'true' &&
        <GoogleTagManager />
    } */
}
// const router = useRouter();
