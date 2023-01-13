import { Box, Container, Typography } from '@mui/material';

const ConfigurePage = () => {
  return (
    <Container maxWidth='md'>
      <Typography
        component='h2'
        variant='h4'
        align='center'
        sx={{ mt: 4, mb: 1 }}
      >
        Configure
      </Typography>
      <Typography sx={{ mt: 3 }} paragraph>
        LeGo Certhub has a config.yaml file to set various operational
        parameters. This page details each parameter&apos;s name and
        functionality. A lot of similar information is contained with in the
        config.default.yaml.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        hostname
      </Typography>
      <Typography paragraph>
        hostname sets the name of the host that LeGo will bind to. This should
        be a hostname and not an ip address due to ssl needs, but an ip address
        will technically work to get the server started.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        https_port & http_port
      </Typography>
      <Typography paragraph>
        These ports specify the port number to bind the LeGo server to. This is
        both the API backend as well as the frontend (if the backend is serving
        the frontend).
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        enable_http_redirect
      </Typography>
      <Typography paragraph>
        If this is true, when the server is running on https, an additional
        server will be started on http to redirect to https.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        log_level
      </Typography>
      <Typography paragraph>
        Self-explanatory log level. This applies to both console and file
        logging.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        serve_frontend
      </Typography>
      <Typography paragraph>
        If true, LeGo server will also host the frontend. That is, on the API
        endpoint server there will be a path /app that will serve the UI.
        Generally this should be true unless you are doing advanced
        configuration.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        private_key_name & certificate_name
      </Typography>
      <Typography paragraph>
        These define the key and certificate pair names that LeGo will use to
        run in https mode.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h3' variant='h6'>
        dev_mode
      </Typography>
      <Typography paragraph>
        Enabled debug logging and some other minor tweaks to how the server
        operates. Generally only use this if you are trying to troubleshoot
        something. Do not leave this on in production.
      </Typography>

      <Typography sx={{ mt: 8 }} component='h3' variant='h5'>
        orders
      </Typography>
      <Typography paragraph>
        This section contains options the change how automatic refreshing of
        certificates functions.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h4' variant='h6'>
        auto_order_enable
      </Typography>
      <Typography paragraph>
        Generally should always be true. This makes the server automatically
        place new orders when old orders are aging out.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h4' variant='h6'>
        valid_remaining_days_threshold
      </Typography>
      <Typography paragraph>
        The number of remaining valid days on a certificate before the server
        places a new order for that certificate.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h4' variant='h6'>
        refresh_time_hour & refresh_time_minute
      </Typography>
      <Typography paragraph>
        The time the daily refresh task should run.
      </Typography>

      <Typography sx={{ mt: 8 }} component='h3' variant='h5'>
        challenges
      </Typography>
      <Typography paragraph>
        This section contains options relating to how challenges are solved.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h4' variant='h6'>
        dns_checker: dns_services: primary_ip & secondary_ip
      </Typography>
      <Typography paragraph>
        This array defines the DNS servers that LeGo will use to check for DNS
        propagation when using a dns challenge solving method. Only a primary_ip
        is necessary but if a particular provider has a secondary that can also
        be specified.
      </Typography>

      <Typography sx={{ mt: 4 }} component='h4' variant='h6'>
        providers
      </Typography>
      <Typography paragraph>
        This section has various options to configure different providers. See
        the config.default.yaml for more details.
      </Typography>
    </Container>
  );
};

export default ConfigurePage;
