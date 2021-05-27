import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {categories} from '../../constants/selectOptions'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../pages/Pages.css';

const inputWidth = window.innerWidth >= 620 ? 'auto' : '100%'

const browseCategories = [{value: 'all', label: 'All Categories'}, ...categories];

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 300,
    width: inputWidth,
    "& .MuiOutlinedInput-input": {
      color: "hsl(206, 100%, 94%)"
    },
    "& .MuiInputLabel-root": {
      color: "hsl(206, 100%, 94%)"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(206, 100%, 94%)"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "hsl(206, 100%, 94%)"
    },
    "&:hover .MuiInputLabel-root": {
      color: "hsl(206, 100%, 94%)"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(206, 100%, 94%)"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "hsl(206, 100%, 94%)"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "hsl(206, 100%, 94%)"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(206, 100%, 94%)"
    },

    "& .MuiSvgIcon-root": {
      fill: "hsl(206, 100%, 94%)"
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
        <h3 className="browse-title light">Filter by category:</h3>
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
          {browseCategories.map((option) => (
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
