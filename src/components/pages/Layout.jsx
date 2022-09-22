import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import Footer from '../Footer';
import logo from '../../assets/book-logo.png';

const Layout = () => {
  const pages = ['home', 'gallery', 'about'];

  return (
    <>
      <Box>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar sx={{ px: { xs: 0 } }}>
              <img
                src={logo}
                alt="logo"
                style={{ height: '3rem', filter: 'grayscale(1) invert(1)' }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 'medium',
                  marginLeft: '0.5rem',
                  pointerEvents: 'none',
                }}
              >
                myBooks
              </Typography>
              <Box>
                {pages.map((item, i) => (
                  <NavLink to={item === 'home' ? '/' : item} key={i}>
                    <Button sx={{ color: '#fff' }}>{item.toUpperCase()}</Button>
                  </NavLink>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
