import React from 'react'
import {Field} from 'formik';
import { makeStyles} from '@material-ui/core/styles';
import {
  TextField,
} from 'formik-material-ui';
import MenuItem from "@material-ui/core/MenuItem";
const width = '100%';
const margin = 0;
const inputSize = window.innerWidth >= 500 ? 'small' : 'medium'

const useStyles = makeStyles({
  root: {
    width,
    marginRight: margin,
    marginLeft: margin,
    "& .MuiOutlinedInput-input": {
      color: "hsl(205, 81%, 29%)"
    },
    "& .MuiInputLabel-root": {
      color: "hsl(205, 57%, 50%)"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(205, 57%, 50%)"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#4eaaff"
    },
    "&:hover .MuiInputLabel-root": {
      color: "#4eaaff"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4eaaff"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#4eaaff"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#4eaaff"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4eaaff"
    }
  }
});
// Input component must have a label and name:
const CustomSelect = ({options, ...props}) => {

  const classes = useStyles();
  return (
      <Field
        component={TextField}
        className={classes.root}
        variant="outlined"
        select
        size={inputSize}
        fullWidth
        {...props}
      >
         {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </Field>
  )
}

export default CustomSelect
