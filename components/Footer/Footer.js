import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 1,
      }}
    >
      <Typography variant='body2' align='center'>
        Copyright © 2023 Greg T. Wallace
      </Typography>
    </Box>
  );
};

export default Footer;
