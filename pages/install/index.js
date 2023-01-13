import { Box, Container, Link, Typography } from '@mui/material';

const InstallPage = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Typography
          component='h2'
          variant='h4'
          align='center'
          sx={{ mt: 4, mb: 1 }}
        >
          Installation
        </Typography>

        <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
          Download
        </Typography>
        <Typography paragraph>
          LeGo CertHub can be obtained{' '}
          <Link
            href='https://github.com/gregtwallace/legocerthub/releases'
            target='_blank'
          >
            here
          </Link>
          . Download it and unpack it on the desired host.
        </Typography>

        <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
          Install
        </Typography>
        <Typography paragraph>
          LeGo is compact and runs from one binary. To install it simply create
          a folder and place all of the files from the release package in it.If
          you want it running as a service (which you probably do) all you have
          to do is configure a service to run the executable.
        </Typography>
        <Typography paragraph>
          For linux installation there is an install script in the scripts
          folder. After unpacking the release package, run ./install.sh as
          superuser (e.g. sudo) and the rest is done for you.
        </Typography>

        <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
          Configure
        </Typography>
        <Typography paragraph>
          Create config.yaml in the same path as the LeGo executable. This file
          may already exist if you used an install script. Edit this file to
          suit your needs. Options are explained in config.default.yaml
        </Typography>
        <Typography paragraph>
          In particular, you should pay special attention to the ports
          you&apos;re running the server on as well as the challenge methods.
          You may need to make changes to your dns, router, and firewall
          configurations. A basic understanding of ACME is needed to properly
          configure these settings and is beyond the scope of this
          documentation. If you want to bind to privileged ports (e.g. 80) you
          may need to make additional modifications to your host.
        </Typography>
        <Typography paragraph>
          Once your config is complete, restart the LeGo server.
        </Typography>

        <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
          Enable SSL
        </Typography>
        <Typography paragraph>
          Login to the LeGo server for the first time. The initial user is
          &apos;admin&apos; and the password is &apos;password&apos;.
        </Typography>

        <Container maxWidth='sm'>
          <Box
            component='img'
            alt='LeGo CertHub Dashboard'
            src='/images/install/1.png'
            sx={{ width: 1, mt: 2 }}
          />
        </Container>
        <Typography paragraph>Once logged in, create a new key.</Typography>

        <Container maxWidth='sm'>
          <Box
            component='img'
            alt='LeGo CertHub Dashboard'
            src='/images/install/2.png'
            sx={{ width: 1, mt: 2 }}
          />
        </Container>
        <Typography paragraph>
          Create a new account with that key. After creation, click
          &apos;Register&apos;.
        </Typography>

        <Container maxWidth='sm'>
          <Box
            component='img'
            alt='LeGo CertHub Dashboard'
            src='/images/install/3.png'
            sx={{ width: 1, mt: 2 }}
          />
        </Container>
        <Typography paragraph>
          Create another new key. This key is for the LeGo server.
        </Typography>

        <Container maxWidth='sm'>
          <Box
            component='img'
            alt='LeGo CertHub Dashboard'
            src='/images/install/4.png'
            sx={{ width: 1, mt: 2 }}
          />
        </Container>
        <Typography paragraph>
          Create the certificate for the LeGo server.
        </Typography>

        <Container maxWidth='sm'>
          <Box
            component='img'
            alt='LeGo CertHub Dashboard'
            src='/images/install/5.png'
            sx={{ width: 1, mt: 2 }}
          />
        </Container>
        <Typography paragraph>
          Finally, place a new order for the certificate and wait for the order
          to be fulfilled. Refresh after a short wait and your order should be
          valid. If it isn&apos;t, check your challenges configuration, dns,
          router, and firewall settings.
        </Typography>

        <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
          Update SSL Config
        </Typography>
        <Typography paragraph>
          If the key and certificate are named &apos;legocerthub&apos; no config
          update is needed. Otherwise, set the names in config.yaml. Restart
          LeGo for SSL to become active.
        </Typography>
        <Typography paragraph>
          Go to Settings and change the default password. Now you are all set to
          begin populating other keys and certificates.
        </Typography>
      </Container>
    </>
  );
};

export default InstallPage;
