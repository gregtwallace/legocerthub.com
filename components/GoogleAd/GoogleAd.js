import { useEffect } from 'react';
import { Container, NoSsr } from '@mui/material';

const GoogleAd = () => {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log('failed to push ad: ', e);
    }
  }, []);

  return (
    <Container>
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
