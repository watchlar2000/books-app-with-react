import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import img1 from '../../assets/carousel-item-1.jpg';
import img2 from '../../assets/carousel-item-2.jpg';
import img3 from '../../assets/carousel-item-3.jpg';
import img4 from '../../assets/carousel-item-4.jpg';

const Gallery = () => {
  const images = [
    {
      name: 'Random Image #1',
      img: img1,
    },
    {
      name: 'Random Image #2',
      img: img2,
    },
    {
      name: 'Random Image #3',
      img: img3,
    },
    {
      name: 'Random Image #4',
      img: img4,
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 2, flexGrow: 1 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          Gallery
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(0, 0, 0, 0.8)',
            fontWeight: '400',
            m: '1rem 0',
          }}
        >
          This is myBooks app made with react. You can add books and keep track
          of whether you read it or not. You can also delete a particular book
          in case you are no longer interested in it. There is a list of books
          which I made up just to show how the page looks like.
        </Typography>
      </Box>
      <Box>
        <Carousel>
          {images.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

function Item(props) {
  return (
    <Box
      sx={{
        padding: '1rem 0',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '20rem',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={props.item.img}
          alt={props.item.name}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}

export default Gallery;
