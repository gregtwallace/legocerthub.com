import { useEffect } from 'react';

import { Container } from '@mui/material';

const GoogleAd = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  },[]);

  return (
    <Container>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-9849738621238699'
        data-ad-slot='4113761759'
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    </Container>
  );
};

export default GoogleAd;
