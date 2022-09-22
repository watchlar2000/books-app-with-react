import React from 'react';
import Book from './Book';

import { Grid } from '@mui/material';

const Books = ({ books, setBooks }) => {
  const changeReadStatus = (id) => {
    setBooks((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const deleteBook = (id) => {
    setBooks((prevState) => prevState.filter((book) => book.id !== id));
  };

  return (
    <Grid container marginTop={0} spacing={3} flexGrow={1}>
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4}>
          <Book
            book={book}
            changeReadStatus={changeReadStatus}
            deleteBook={deleteBook}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;
