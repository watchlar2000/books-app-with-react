import React from 'react';
import { Link } from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 2,
        p: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '.95rem',
        fontWeight: '500',
      }}
    >
      Copyright &copy; {new Date().getFullYear()}
      <Link
        href="https://github.com/watchlar2000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon
          sx={{
            opacity: '0.67',
            transition: 'all 0.1s ease',
            ':hover': { opacity: '1' },
          }}
        />
      </Link>
    </Box>
  );
};

export default Footer;
