import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddBookBtn = ({ handleOpen }) => {
  return (
    <Fab size="medium" color="secondary" aria-label="add" onClick={handleOpen}>
      <AddIcon />
    </Fab>
  );
};

export default AddBookBtn;
