import { Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 2, flexGrow: 1 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: '500',
          color: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        About
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(0, 0, 0, 0.8)',
          fontWeight: '400',
          m: '1rem 0',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam
        debitis esse illo magni sapiente nobis, atque quas commodi error ipsam
        quo laudantium nemo minima inventore neque modi consequuntur, illum sed
        ipsum deleniti odit iusto laboriosam corrupti? Ad, nam quos. Laudantium
        explicabo impedit, blanditiis aliquam ducimus necessitatibus quae eaque
        aperiam?
      </Typography>
    </Container>
  );
};

export default About;
