import Head from 'next/head';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GoogleAdHead from '../components/GoogleAd/GoogleAdHead';

const App = ({ Component, pageProps }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        <meta property='og:title' content='LeGo CertHub' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content="LeGo CertHub: Centralized Let's Encrypt Certificate Management"
        />
        <meta
          property='og:image'
          content='https://www.legocerthub.com/images/og/og_image.png'
        />
        <meta property='og:url' content='https://www.legocerthub.com/' />

        <title>LeGo CertHub</title>
        <meta
          name='description'
          content="LeGo CertHub is centralized Let's Encrypt certificate management software."
        />

        <GoogleAdHead />
      </Head>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Navbar />

        <Box
          component='main'
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Component {...pageProps} />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
