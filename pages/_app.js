import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { Footer, Navbar } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="bg-color-car-app dark:bg-nft-dark min-h-screen">
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/c6e55f6362.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
