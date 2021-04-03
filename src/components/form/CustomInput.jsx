import React from 'react'
import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import { makeStyles} from '@material-ui/core/styles';
const inputSize = window.innerWidth >= 500 ? 'small' : 'medium'

const useStyles = makeStyles({
  textField: {
    width: 200,
  },

  cssLabel: {
    color: 'hsl(205, 57%, 50%)',
    "&.Mui-error": {
      color: 'hsl(205, 57%, 50%)'
    },
    "&.MuiFormHelperText-root": {
      color: 'white'
    },
    "&.Mui-focused": {
      color: '#4eaaff'
    }
  },

  cssOutlinedInput: {
    '&.MuiInputBase-root': {
      color : 'hsl(205, 81%, 29%)',
      
    },
    '&$cssFocused $notchedOutline': {
      borderColor: `#4eaaff !important`,
    },
  },

  cssFocused: {
    color: 'white'
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'hsl(205, 57%, 50%) !important'
  },
});

// Input component must have a label and name:
const CustomInput = (props) => {

  const classes = useStyles();
  return (
    
    <Field
      component={TextField}
      // style={{ margin: 8 }}
      {...props}
      variant="outlined"
      fullWidth
      size={inputSize}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      // margin="normal"
    />
  )
}

export default CustomInput
