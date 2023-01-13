import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  {
    name: 'Install',
    href: '/install',
  },
  {
    name: 'Configure',
    href: '/configure',
  },
  {
    name: 'Usage',
    href: '/usage',
  },
  {
    name: 'Download',
    href: 'https://github.com/gregtwallace/legocerthub/releases',
    target: '_blank',
  },
  {
    name: 'Source',
    href: 'https://github.com/gregtwallace/legocerthub',
    target: '_blank',
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* Dummy AppBar for spacing */}
      <AppBar position='static'>
        <Toolbar></Toolbar>
      </AppBar>
      {/* Real AppBar */}
      <AppBar position='fixed'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component={Link}
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LeGo CertHub
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='navigation'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    component={Link}
                    href={page.href}
                    target={page.target && `target=${page.target}`}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign='center'>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant='h6'
              noWrap
              component={Link}
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LeGo CertHub
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  href={page.href}
                  target={page.target && `target=${page.target}`}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
