import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {categories} from '../../constants/selectOptions'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../pages/Pages.css';

const inputWidth = window.innerWidth >= 620 ? 'auto' : '100%'

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(5),
    minWidth: 300,
    width: inputWidth,
    "& .MuiOutlinedInput-input": {
      color: "hsl(205, 81%, 29%)"
    },
    "& .MuiInputLabel-root": {
      color: "hsl(205, 81%, 29%)"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(205, 81%, 29%)"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "hsl(205, 81%, 29%)"
    },
    "&:hover .MuiInputLabel-root": {
      color: "hsl(205, 81%, 29%)"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(205, 81%, 29%)"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "hsl(205, 81%, 29%)"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "hsl(205, 81%, 29%)"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(205, 81%, 29%)"
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function BrowseInput({updateCategory}) {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
    updateCategory(event.target.value)
  };


  return (
      <div className="browse-navbox">
        <h3 className="browse-title">Filter by category:</h3>
        <FormControl variant="outlined" className={classes.formControl} px={4} >
          <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={handleChange}
            label="Category"
            fullWidth
          >
          {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>
  )
}

export default BrowseInput
