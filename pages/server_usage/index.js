import { Box, Container, Typography } from '@mui/material';

const ServerUsagePage = () => {
  return (
    <Container maxWidth='md'>
      <Typography
        component='h2'
        variant='h4'
        align='center'
        sx={{ mt: 4, mb: 1 }}
      >
        Server Usage
      </Typography>
      <Typography sx={{ mt: 3 }} paragraph>
        LeGo CertHub provides intuitive pages to manage each step of the ACME
        workflow.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        Dashboard
      </Typography>
      <Typography paragraph>
        The dashboard shows all certificates currently being hosted by LeGo.
        That is, the certificate must have a valid order to be hosted, so
        certificates will only show up here once valid.
      </Typography>
      <Typography paragraph>
        This operates as a centralized way to view the remaining validity of
        certificates and to set expectations about reorders.
      </Typography>

      <Container maxWidth='lg'>
        <Box
          component='img'
          alt='LeGo CertHub Dashboard'
          src='/images/dashboard_light.png'
          sx={{ width: 1, mt: 2 }}
        />

        <Box
          component='img'
          alt='LeGo CertHub Dashboard'
          src='/images/dashboard_dark.png'
          sx={{ width: 1, mt: 2 }}
        />
      </Container>

      <Typography sx={{ mt: 8 }} component='h3' variant='h6'>
        Private Keys
      </Typography>
      <Typography paragraph>
        Private Keys offers options to view a list of keys, make new keys (via
        import or generation), and to edit existing keys.
      </Typography>
      <Box
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/keys_1.png'
        sx={{ width: 1, mt: 2 }}
      />
      <Container
        maxWidth='sm'
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/keys_2.png'
        sx={{ width: 1, mt: 2 }}
      />
      <Container
        maxWidth='sm'
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/keys_3.png'
        sx={{ width: 1, mt: 2 }}
      />

      <Typography sx={{ mt: 8 }} component='h3' variant='h6'>
        ACME Accounts
      </Typography>
      <Typography paragraph>
        ACME Accounts offers options to view a list of accounts, make new
        accounts, and to edit existing accounts.
      </Typography>
      <Typography paragraph>
        There are also various functions on individual accounts to register,
        change email, rotate key, and deactivate.
      </Typography>
      <Box
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/accounts_1.png'
        sx={{ width: 1, mt: 2 }}
      />
      <Container
        maxWidth='sm'
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/accounts_2.png'
        sx={{ width: 1, mt: 2 }}
      />
      <Container
        maxWidth='sm'
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/accounts_3.png'
        sx={{ width: 1, mt: 2 }}
      />

      <Typography sx={{ mt: 8 }} component='h3' variant='h6'>
        Certificates
      </Typography>
      <Typography paragraph>
        Certficiates offers options to view a list of certificates, make new
        certificates, and to edit existing certificates. Certificates are not
        part of the ACME process but exist in LeGo to manage and group orders
        together in a sane and logical manner.
      </Typography>
      <Typography paragraph>
        On any particular certificate a list of all orders are available
        including options to place a new order, retry an existing order, or
        revoke a completed order.
      </Typography>
      <Box
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/certificates_1.png'
        sx={{ width: 1, mt: 2 }}
      />
      <Container
        maxWidth='sm'
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/certificates_2.png'
        sx={{ width: 1, mt: 2 }}
      />
      <Box
        component='img'
        alt='LeGo CertHub Dashboard'
        src='/images/server_usage/certificates_3.png'
        sx={{ width: 1, mt: 2 }}
      />

      <Typography sx={{ mt: 8 }} component='h3' variant='h6'>
        Logs & Settings
      </Typography>
      <Typography paragraph>
        The final two pages in LeGo are the logs and settings pages.
      </Typography>
      <Typography paragraph>
        Logs displays the content of the current log file and there is also a
        button to download all log files.
      </Typography>
      <Typography paragraph>
        Settings displays some information about the current state of LeGo and
        also provides the ability to change the login password. This page may
        expand in the future to allow modification of items currently controlled
        exclusively in the config.yaml file.
      </Typography>
    </Container>
  );
};

export default ServerUsagePage;
