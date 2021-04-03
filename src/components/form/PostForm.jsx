import React from 'react';
import {Formik, Form} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {Button, LinearProgress,} from '@material-ui/core';
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import Box from '@material-ui/core/Box';
import {categories, subCategories} from '../../constants/selectOptions'
import { useHistory } from "react-router-dom";
import 'firebase/firestore';
import {firestore} from '../../firebase/index'


const PostForm = ({updating, pastValues}) => {

  
  const postsRef = firestore.collection('post_content');
  const history = useHistory();
  const size = window.innerWidth >= 500 ? 'normal' : 'small';


    const submitForm = async (values, {setSubmitting}) => {
      console.log(values)
      const id = uuidv4();
      const veri = uuidv4()
      // const alternateValues = {
      //   postID: id,
      //   veriToken: veri,
      //   postTitle: title,
      //   category,
      //   tags: tags ? tags.split(' ') : [],
      //   shortDesc: description,
      //   longDesc: content,
      //   externalLinks: links ? links.replace(/\r/g, "").split(/\n/) : [],
      //   cellNumber: phone,
      //   email, 
      //   subCategory,
      //   date: new Date().toDateString().slice(4,15)
      // }

      await postsRef.add({...values, postID: id, veriToken: veri});
      // if (!updating) {
      //   await sendEmailLink(email,
      //   `https:\colab-sfhacks-firebase.web.app\edit?${veri}`,
      //   `https:\colab-sfhacks-firebase.web.app\delete?${veri}`
      // )}
      setSubmitting(false);
      history.push(`/post?id=${id}`)
    }

  // const updateForm = () => {
  //   console.log('updating!!!!')
  // }

  return (<Formik
    initialValues={pastValues || {
      title: '',
      email: '',
      description: '',
      message: '',
      content: '',
      category: '',
      phone: '',
      tags: '',
      links: '',
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

      if (!values.description) {
        errors.description = 'Please enter a short description.';
      }

      if (!values.content) {
        errors.content = 'Please enter some content for the post.';
      }

      return errors;
    }}
    onSubmit={submitForm}
  >
    {({submitForm, isSubmitting, values, touched, errors}) => (

        <Form style={{marginTop: '2rem', marginBottom: '2rem'}}>

          {size === 'normal' && 
          <Box  margin={3}>
            <CustomSelect type="text" name="category" label="Category*" options={categories}/>
          </Box> }

          <Box margin={3}>
            <CustomInput type="text" name="title" label="Title*"/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="description" label="Description*"/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="content" label="Content* (Markdown)" multiline rows={6}/>
          </Box>

          <Box margin={3}>
            <CustomInput type="email" name="email" label="Email*"/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="tags" label="Tags (optional)"/>
          </Box>

          <Box margin={3}>
            <CustomInput type="text" name="phone" label="Phone Number (optional)"/>
          </Box>

          {isSubmitting && <LinearProgress />}
          <Box margin={3}>
            <button onClick={submitForm} disabled={isSubmitting} className="submit-btn btn">Submit Post</button>
          </Box>
        </Form>
    )}
  </Formik>
  )
};

export default PostForm;