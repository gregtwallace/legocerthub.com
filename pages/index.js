import { Box, Container, Link, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <Typography
          component='h2'
          variant='h4'
          align='center'
          sx={{ mt: 4, mb: 1 }}
        >
          Centralized Certificate Management
        </Typography>
        <Typography
          component='h3'
          variant='h5'
          align='center'
          color='text.secondary'
        >
          Conveniently Leverage Let&apos;s Encrypt to Secure Your Infrastructure
        </Typography>
      </Container>

      <Container maxWidth='lg'>
        <Box
          component='img'
          alt='LeGo CertHub Dashboard'
          src='/images/dashboard_light.png'
          sx={{ width: 1, mt: 2 }}
        />
        <Typography variant='subtitle' color='text.secondary' paragraph>
          LeGo CertHub&apos;s Dashboard
        </Typography>
      </Container>

      <Container maxWidth='md'>
        <Typography paragraph>
          LeGo CertHub (Let&apos;s Encrypt Go Certificate Hub) acts as a central
          management platform for Let&apos;s Encrypt keys, accounts, and
          certificates.
        </Typography>
        <Typography paragraph>
          This project came out of my desire to resolve certificate errors
          within web services in my home lab without having to set up a
          Let&apos;s Encrypt client on every endpoint. After fighting with other
          solutions and wanting to learn Golang, I decided to create my own
          solution.
        </Typography>
        <Typography paragraph>
          LeGo Certhub is composed of two components. A Golang backend REST API
          and a React frontend. When running in the suggested configuration, the
          frontend is hosted by the backend and the only direct interaction
          needed with the API is clients fetching hosted keys and certificates.
          Clients using the keys and certificates fetch them via the REST API
          and some example scripts are{' '}
          <Link
            href='https://github.com/gregtwallace/certificate-scripts'
            target='_blank'
          >
            available for reference
          </Link>
          .
        </Typography>

        
      </Container>
    </>
  );
};

export default Home;
