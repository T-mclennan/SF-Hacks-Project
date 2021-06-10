import React from 'react';
import {Formik, Form} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { LinearProgress,} from '@material-ui/core';
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import Box from '@material-ui/core/Box';
import {categories } from '../../constants/selectOptions'
import { useHistory } from "react-router-dom";
import {publishPost} from '../../api'
import 'firebase/firestore';
import firebase from "firebase/app";
import {firestore} from '../../firebase/index'


const PostForm = ({updating, pastValues}) => {
  
  const postsRef = firestore.collection('post_content');
  const history = useHistory();

    const publishNewForm = async (values, {setSubmitting}) => {
      const pid = uuidv4();
      const vid = uuidv4()
      const dateCreated = firebase.firestore.FieldValue.serverTimestamp()

      await postsRef.add({...values, pid, vid, dateCreated});
      publishPost({...values, pid, vid});
      setSubmitting(false);
      history.push(`/post?id=${pid}`)
    }

    const updateOldForm = (values, {setSubmitting}) => {
      postsRef.where("pid", "==", values.pid)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data());
              doc.ref.update(values)
          });
      }).then(() => {
        setSubmitting(false);
        history.push(`/post?id=${values.pid}`)
      }) 
      .catch(e => console.error(e))
    }

    const submitForm = updating ? updateOldForm : publishNewForm;

  return (<Formik
    initialValues={pastValues || {
      title: '',
      email: '',
      content: '',
      category: '',
      phone: '',
      tags: '',
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

      if (!values.title) {
        errors.title = 'Please enter a title.';
      }

      if (!values.content) {
        errors.content = 'Please enter content for this post.';
      }

      return errors;
    }}
    onSubmit={submitForm}
  >
    {({submitForm, isSubmitting, values, touched, errors}) => (

        <Form style={{marginTop: '2rem', marginBottom: '2rem'}}>

          <Box  margin={3}>
            <CustomSelect type="text" name="category" label="Category*" options={categories}/>
          </Box> 

          <Box margin={3}>
            <CustomInput type="text" name="title" label="Title*" inputProps={{maxLength: 75}}/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="content" label="Content*" multiline rows={10} inputProps={{maxLength: 6000}}/>
          </Box>

          <Box margin={3}>
            <CustomInput type="email" name="email" label="Email*" inputProps={{maxLength: 50}}/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="tags" label="Tags (optional)" inputProps={{maxLength: 30}}/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="phone" label="Phone Number (optional)" inputProps={{maxLength: 15}}/>
          </Box>

          {isSubmitting && <LinearProgress />}
          <Box margin={3}>
            <button type="submit" disabled={isSubmitting} className="submit-btn btn">
              {updating ? 'Update Post' :'Submit Post'}
              </button>
          </Box>
        </Form>
    )}
  </Formik>
  )
};

export default PostForm;