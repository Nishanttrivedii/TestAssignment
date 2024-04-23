import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BookshelfChanger = ({ shelf, book, onMove }) => {
  const [value, setValue] = useState(shelf);

  const handleChange = (event) => {
    const { value: selectedValue } = event.target;
    setValue(selectedValue);
    onMove(book, selectedValue);
  };

  return (
  <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Move to..</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="move to.."
          onChange={handleChange}
        >
            <MenuItem value="currentlyReading">Currently Reading</MenuItem>
        <MenuItem value="wantToRead">Want to Read</MenuItem>
        <MenuItem value="read">Read</MenuItem>
        <MenuItem value="none">None</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BookshelfChanger;
