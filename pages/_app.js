import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer, Navbar } from '../components';
import '../styles/globals.css';

config.autoAddCss = false;

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="bg-main-app min-h-screen">
      <Navbar />
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

  </ThemeProvider>
);

export default App;
