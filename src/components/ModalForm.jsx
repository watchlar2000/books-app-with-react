import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Modal,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const ModalForm = forwardRef(({ addBook }, ref) => {
  const emptyBook = {
    title: '',
    author: '',
    description: '',
    genre: '',
    isRead: false,
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f1f1f1',
    boxShadow: 24,
    p: 4,
  };

  const genres = ['fiction', 'nonfiction', 'business', 'psychology', 'history'];

  useImperativeHandle(ref, () => ({
    open() {
      handleOpen();
    },
    close() {
      handleClose();
    },
  }));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newBook, setNewBook] = useState(emptyBook);

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setNewBook((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const createBook = () => {
    addBook(newBook);
    setNewBook(emptyBook);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Book details:
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'start',
              }}
              autoComplete="off"
            >
              <TextField
                fullWidth
                id="outlined-name"
                name="title"
                value={newBook.title}
                onChange={changeHandler}
                label="Title"
              />
              <TextField
                fullWidth
                id="outlined-name"
                name="author"
                value={newBook.author}
                onChange={changeHandler}
                label="Author"
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                fullWidth
                multiline
                rows={4}
                name="description"
                value={newBook.description}
                onChange={changeHandler}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newBook.genre}
                  name="genre"
                  label="Genre"
                  onChange={changeHandler}
                >
                  {genres.map((genre) => (
                    <MenuItem value={genre} key={genres.indexOf(genre)}>
                      {genre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isRead"
                    type="checkbox"
                    checked={newBook.isRead}
                    onChange={changeHandler}
                  />
                }
                label="Have you read it?"
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="contained" sx={{ mt: 2 }} onClick={createBook}>
              Add book
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
});

export default ModalForm;
