import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" style={{ color: '#999' }}>
        404
      </Typography>
      <Typography variant="h5" style={{ color: '#999' }}>
        Page not found :(
      </Typography>
    </Box>
  );
};

export default ErrorPage;
