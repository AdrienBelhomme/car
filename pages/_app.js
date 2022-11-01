import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';

import { Footer, Navbar } from '../components';
import '../styles/globals.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="bg-main-app dark:bg-nft-dark min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/c6e55f6362.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
