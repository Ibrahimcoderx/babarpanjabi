import Head from "next/head";



// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



// Font Link Css
import '../styles/landing-common-css/landing-font.css';



// Landing Page Css

import '../styles/landing-common-css/landing-common.css';


import '../styles/landing-24.css';


export default function App({ Component, pageProps }) {

  return <>
  
      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Babar Panjabi</title>
        <meta name="description" content="Babar Panjabi" />
        <link rel="icon" href="images/landing-24/logo.png" />

      </Head>
  
    <Component {...pageProps} />


  </>


}
