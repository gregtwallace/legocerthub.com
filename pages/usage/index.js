import { Container, Typography } from '@mui/material';

const UsagePage = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Typography
          component='h2'
          variant='h4'
          align='center'
          sx={{ mt: 4, mb: 1 }}
        >
          Usage
        </Typography>
        <Typography sx={{ mt: 3 }} paragraph>
          LeGo Certhub provides intuitive pages to manage each step of the ACME
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

        

      </Container>
    </>
  );
};

export default UsagePage;
