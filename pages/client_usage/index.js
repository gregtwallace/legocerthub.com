import { Link as NextLink } from 'next/link';
import { Container, Link, Typography } from '@mui/material';
import GoogleAd from '../../components/GoogleAd/GoogleAd';

const ClientUsagePage = () => {
  return (
    <Container maxWidth='md'>
      <Typography
        component='h2'
        variant='h4'
        align='center'
        sx={{ mt: 4, mb: 1, color: 'info.light' }}
      >
        Client Usage
      </Typography>
      <Typography sx={{ mt: 3 }} paragraph>
        Clients fetch their certificates and keys from LeGo via API GET calls.
        This page outlines the various nodes, their functions, and parameters.
        The &apos;Legacy API&apos; option allows specifying the apiKey in the
        URL itself. This is generally discouraged and disabled by default as it
        can lead to accidental leaking of the API key. You should only use this
        feature if the client fetching the data does not support specifying the
        API key in the header.
      </Typography>
      <Typography paragraph>
        I&apos;ve written various scripts for my home lab to fetch keys and
        certificates{' '}
        <Link
          component={NextLink}
          href='https://github.com/gregtwallace/certificate-scripts'
          target='_blank'
        >
          available here
        </Link>
        . Since these are from a lab environment, they don&apos;t have complex
        (if any) error checking and handling. You should customize them to suit
        your needs.
      </Typography>
      <Typography paragraph>
        Additionally, the LeGo GUI is a client accessing the API as well, so if
        you wanted to you could write your own GUI. This page only documents the
        nodes relevant to key and cert fetching. For a list of all nodes refer
        to the backend source /pkg/domain/app/routes.go.
      </Typography>
      <Typography
        sx={{ mt: 8, color: 'info.light' }}
        component='h3'
        variant='h6'
      >
        Get Private Key
      </Typography>
      <Typography paragraph>
        GET /api/v1/download/privatekeys/:name/*apiKey
      </Typography>
      <Typography paragraph>
        The node to retrieve the pem content of a private key. :name is the name
        of the private key as specified in the &apos;name&apos; field. *apiKey
        should be blank unless legacy api is required and enabled for the
        specific key.
      </Typography>
      <Typography paragraph>
        The key&apos;s API key should be specified in a header named
        &apos;X-API-Key&apos; or &apos;apikey&apos;.
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET lego.example.com/api/v1/download/privatekeys/SomeKeyINeed
      </Typography>
      <Typography paragraph>
        (Header) X-API-Key: 1234567890abcdefghijk{' '}
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Legacy Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET
        lego.example.com/api/v1/download/privatekeys/SomeKeyINeed/1234567890abcdefghijk
      </Typography>
      <GoogleAd />

      <Typography
        sx={{ mt: 8, color: 'info.light' }}
        component='h3'
        variant='h6'
      >
        Get Certificate
      </Typography>
      <Typography paragraph>
        GET /api/v1/download/certificates/:name/*apiKey
      </Typography>
      <Typography paragraph>
        The node to retrieve the pem content of a certificate. :name is the name
        of the certificate as specified in the &apos;name&apos; field. *apiKey
        should be blank unless legacy api is required and enabled for the
        specific certificate.
      </Typography>
      <Typography paragraph>
        The specific pem content served is based on the most recent valid order
        for the specified certificate name. LeGo automatically determines this
        therefore keeping this path static while updating the content served
        from it as orders are refreshed.
      </Typography>
      <Typography paragraph>
        The certificate&apos;s API key should be specified in a header named
        &apos;X-API-Key&apos; or &apos;apikey&apos;.
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET lego.example.com/api/v1/download/certificates/SomeCertificateINeed
      </Typography>
      <Typography paragraph>
        (Header) X-API-Key: 1234567890abcdefghijk{' '}
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Legacy Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET
        lego.example.com/api/v1/download/certificates/SomeCertificateINeed/1234567890abcdefghijk
      </Typography>
      <GoogleAd />

      <Typography sx={{ mt: 6 }} paragraph>
        The final two nodes are far less likely to be needed, but certain
        clients prefer files this way so I created them.
      </Typography>

      <Typography
        sx={{ mt: 8, color: 'info.light' }}
        component='h3'
        variant='h6'
      >
        Get Combined Key & Certificate
      </Typography>
      <Typography paragraph>
        GET /api/v1/download/privatecerts/:name/*apiKey
      </Typography>
      <Typography paragraph>
        The node to retrieve a singular file with the combined pem content of a
        key and certificate. :name is the name of the certificate as specified
        in the &apos;name&apos; field. The name of the key will be calculated
        based on the key that was used to finalize the certificate&apos;s order.
        *apiKey should be blank unless legacy api is required and enabled for
        the specific certificate.
      </Typography>
      <Typography paragraph>
        The specific pem content served is based on the most recent valid order
        for the specified certificate name. LeGo automatically determines this
        therefore keeping this path static while updating the content served
        from it as orders are refreshed.
      </Typography>
      <Typography paragraph>
        The API Key for this node is a concatenation of the API key of the
        certificate and key, separated by a period. The API key should be
        specified in a header named &apos;X-API-Key&apos; or &apos;apikey&apos;.
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET lego.example.com/api/v1/download/privatecerts/SomeCertificateINeed
      </Typography>
      <Typography paragraph>
        (Header) X-API-Key: certAPIkey123abc.keyAPIkey567def{' '}
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Legacy Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET
        lego.example.com/api/v1/download/privatecerts/SomeCertificateINeed/certAPIkey123abc.keyAPIkey567def
      </Typography>
      <GoogleAd />

      <Typography
        sx={{ mt: 8, color: 'info.light' }}
        component='h3'
        variant='h6'
      >
        Get Certificate Root Chain
      </Typography>
      <Typography paragraph>
        GET /api/v1/download/certrootchains/:name/*apiKey
      </Typography>
      <Typography paragraph>
        The node to retrieve the pem content of a certificate&apos;s root chain.
        This node does strips and does not return the certificate itself. :name
        is the name of the certificate as specified in the &apos;name&apos;
        field. *apiKey should be blank unless legacy api is required and enabled
        for the specific certificate.
      </Typography>
      <Typography paragraph>
        The specific pem content served is based on the most recent valid order
        for the specified certificate name. LeGo automatically determines this
        therefore keeping this path static while updating the content served
        from it as orders are refreshed.
      </Typography>
      <Typography paragraph>
        The certificate&apos;s API key should be specified in a header named
        &apos;X-API-Key&apos; or &apos;apikey&apos;.
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET lego.example.com/api/v1/download/certrootchains/SomeCertificateINeed
      </Typography>
      <Typography paragraph>
        (Header) X-API-Key: 1234567890abcdefghijk{' '}
      </Typography>
      <Typography sx={{ mt: 3 }} component='h4' variant='h7'>
        Legacy Example
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        GET
        lego.example.com/api/v1/download/certrootchains/SomeCertificateINeed/1234567890abcdefghijk
      </Typography>
      <GoogleAd />
    </Container>
  );
};

export default ClientUsagePage;
