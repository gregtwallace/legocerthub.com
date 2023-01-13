import { Box, Container, Typography } from '@mui/material';

const ClientUsagePage = () => {
  return (
    <Container maxWidth='md'>
      <Typography
        component='h2'
        variant='h4'
        align='center'
        sx={{ mt: 4, mb: 1 }}
      >
        Client Usage
      </Typography>
      <Typography sx={{ mt: 3 }} paragraph>
        To-Do
      </Typography>
    </Container>
  );
};

export default ClientUsagePage;
