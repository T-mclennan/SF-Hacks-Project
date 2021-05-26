import React, {useState} from 'react';
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import {LinearProgress} from '@material-ui/core';
import CustomInput from './CustomInput'
import Box from '@material-ui/core/Box';

const ContactForm = ({updating, pastValues}) => {

  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xknplldl",
      data: values
    })
      .then(res => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Message sent. Thanks for reaching out!");
      })
      .catch(error => {
        console.log(error)
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}

    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Please enter an email.';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address.';
      }
      if (!values.name) {
        errors.name = 'Please enter a name.';
      }

      if (!values.message) {
        errors.content = 'Please enter a message.';
      }

      return errors;
    }}
    onSubmit={handleOnSubmit}
  >
    {({isSubmitting, values, touched, errors}) => (

        <Form style={{marginTop: '2rem', marginBottom: '2rem'}}>
          <Box margin={3}>
            <CustomInput type="text" name="name" label="Name*"/>
          </Box>

          <Box margin={3}>
            <CustomInput type="email" name="email" label="Email*"/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="message" label="Message*" multiline rows={6}/>
          </Box>

          <Box margin={3}>
            <button type="submit" disabled={isSubmitting} className="submit-btn btn">Submit Feedback</button>
          </Box>
          {isSubmitting && <LinearProgress />}
          {serverState && (
            <p className={!serverState.ok ? "error-msg" : "response-msg"}>
              {serverState.msg}
            </p>
          )}
        </Form>
    )}
  </Formik>
};

export default ContactForm;
