import { useEffect } from 'react';
import { Container, NoSsr, Typography } from '@mui/material';

const GoogleAd = () => {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log('failed to push ad: ', e);
    }
  }, []);

  // return placeholder if not in prod
  if (process.env.NODE_ENV !== 'production') {
    return (
      <Container
        sx={{ my: 2, width: 1, height: '165px', bgcolor: 'info.dark' }}
      >
        <Typography paragraph variant='h6' align='center' sx={{ pt: 5 }}>
          Ad Placeholder
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ my: 2 }}>
      <NoSsr>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-9849738621238699'
          data-ad-slot='6418207729'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </NoSsr>
    </Container>
  );
};

export default GoogleAd;
