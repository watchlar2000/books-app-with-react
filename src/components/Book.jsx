import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Chip,
  Typography,
  Button,
} from '@mui/material';

const Book = ({ book, changeReadStatus, deleteBook }) => {
  const { id, title, author, description, genre, isRead } = book;

  return (
    <Card
      sx={{
        padding: '1rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          padding: '0',
          flexGrow: 1,
        }}
      >
        <Typography gutterBottom variant="h5" component="p">
          {title}
        </Typography>
        <Typography variant="body1" component="p" sx={{ fontStyle: 'italic' }}>
          by {author}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: '0.5rem' }}
        >
          {description}
        </Typography>
        <Chip label={genre} variant="outlined" sx={{ mt: '1rem' }} />
      </CardContent>
      <CardActions
        sx={{
          padding: '0',
          mt: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={isRead}
              onChange={() => {
                changeReadStatus(id);
              }}
            />
          }
          label={isRead ? `I have read it!` : `Plan to read it`}
        />

        <Button size="small" onClick={() => deleteBook(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
