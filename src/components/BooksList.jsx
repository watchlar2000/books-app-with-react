import React, { useState, useEffect, useRef } from 'react';

import ModalForm from './ModalForm';
import Books from './Books';
import AddBookBtn from './AddBookBtn';

import { booksData } from '../data/books';
import { Box, Container, Typography } from '@mui/material';

const BooksList = () => {
  class Book {
    constructor(title, author, description, genre, isRead, id) {
      this.title = title || 'Book';
      this.author = author || 'Author';
      this.description = description || 'Description';
      this.genre = genre || 'genre not specified';
      this.isRead = isRead || false;
      this.id = id || new Date().getTime();
    }
  }

  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem('books')) || booksData
  );

  const openModalRef = useRef();
  const handleOpen = () => openModalRef.current.open();

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = ({ title, author, description, genre, isRead } = {}) => {
    const id = new Date().getTime();
    setBooks((books) => [
      new Book(title, author, description, genre, isRead, id),
      ...books,
    ]);
    openModalRef.current.close();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2, flexGrow: 1 }}>
      <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          Welcome!
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
          in case you are no longer interested in it.
          <Typography variant="title" color="inherit" noWrap>
            &nbsp;
          </Typography>
          <Typography
            variant="inherit"
            component="span"
            sx={{
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            There is a list of books which I made up just to show how the page
            looks like.
          </Typography>
        </Typography>
      </Box>
      <AddBookBtn handleOpen={handleOpen} />
      <Books books={books} setBooks={setBooks} />
      <ModalForm ref={openModalRef} addBook={addBook} />
    </Container>
  );
};

export default BooksList;
