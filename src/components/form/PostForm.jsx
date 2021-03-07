import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import axios from 'axios'
import {
  Button,
  LinearProgress,
} from '@material-ui/core';
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import Box from '@material-ui/core/Box';
import FormResult from './FormResult';
import {categories, subCategories} from '../../constants/selectOptions'


const PostForm = ({updating, pastValues}) => {


  const [serverState, setServerState] = useState(undefined);
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  const size = window.innerWidth >= 500 ? 'normal' : 'small'

  return (serverState ? 
    <FormResult status={serverState.ok} msg={serverState.msg}/>
    : <Formik
    initialValues={pastValues || {
      title: '',
      email: '',
      description: '',
      message: '',
      content: '',
      category: '',
      subCategory: '',
    }}

    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Please enter an email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.title) {
        errors.title = 'Please enter a title';
      }

      if (!values.description) {
        errors.description = 'Please enter a short description';
      }

      if (!values.content) {
        errors.content = 'Please enter some content for post';
      }

      return errors;
    }}
    onSubmit={(values) => {
      console.log(values)
      // axios({
      //   method: "POST",
      //   url: "https://formspree.io/f/mbjpzkgb",
      //   data: values
      // })
      //   .then(response => {
      //     setSubmitting(false);
      //     handleServerResponse(true, "Thank you for the feedback.");
      //   })
      //   .catch(error => {
      //     setSubmitting(false);
      //     handleServerResponse(false, error.response.data.error);
      //   });
    }}
  >
    {({submitForm, isSubmitting, values, touched, errors}) => (

        <Form style={{marginTop: '2rem', marginBottom: '2rem'}}>

          {size === 'normal' && 
          <Box  margin={2}>
            <CustomSelect type="text" name="category" label="Category" options={categories}/>
            <CustomSelect 
              type="text" 
              name="subCategory" 
              label="SubCategory" 
              options={subCategories[`${values.category}`] || []}
            />
          </Box> }

          {size === 'small' && 
          <Box margin={2}>
            <CustomSelect type="text" name="category" label="Category" options={categories}/>
          </Box> 
          }

          {size === 'small' && 
            <Box margin={2}>
              <CustomSelect 
                type="text" 
                name="subCategory" 
                label="SubCategory" 
                options={subCategories[`${values.category}`] || []}
              />
            </Box> 
          }



          <Box margin={2}>
            <CustomInput type="text" name="title" label="Title"/>
          </Box>
          
          <Box margin={2}>
            <CustomInput type="email" name="email" label="Email"/>
          </Box>

          <Box margin={2}>
            <CustomInput type="text" name="description" label="Description"/>
          </Box>

          <Box margin={2}>
            <CustomInput type="text" name="content" label="Content" multiline rows={6}/>
          </Box>

          <Box margin={2}>
            <CustomInput type="text" name="links" label="External Links (optional)" multiline rows={4} helperText="please list one link per line"/>
            
          </Box>

          <Box margin={2}>
            <CustomInput type="text" name="tags" label="Tags (optional)" helperText="please list tags seperated by a space. ex: 'react node aws'"/>
          </Box>

          <Box margin={2}>
            <CustomInput type="text" name="phone number" label="Phone Number (optional)"/>
          </Box>

          {isSubmitting && <LinearProgress />}
          <Box margin={2}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Box>
        </Form>
    )}
  </Formik>
  )
};

export default PostForm;