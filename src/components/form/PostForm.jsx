import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {Button,ExpansionPanelDetails,LinearProgress,} from '@material-ui/core';
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import Box from '@material-ui/core/Box';
import axios from 'axios';
import {categories, subCategories} from '../../constants/selectOptions'
import { useHistory } from "react-router-dom";
import 'firebase/firestore';
import {firestore} from '../../firebase/index'


const PostForm = ({updating, pastValues}) => {

  
  const postsRef = firestore.collection('test');
  const history = useHistory();
  const size = window.innerWidth >= 500 ? 'normal' : 'small';

  const sendEmailLink = ({edit, del, email}) => {
    axios({
      method: "POST",
      url: "https://events-api.notivize.com/applications/b0fd8df6-c074-45c7-8e50-7b600354ebfb/event_flows/456cc8dc-5e19-4bf0-a179-9120fd795c0f/events",
      data: {
              'email': email,
              'Link1': edit,
              'Link2': del
            }
      })
      .then(response => {
        console.log(response)
    
      })
      .catch(error => {
        console.log(error)
      });
    }

    const submitForm = async ({title, email, description, content, category, subCategory, phone, tags,links,}, {setSubmitting}) => {
      const id = uuidv4();
      const veri = uuidv4()
      const alternateValues = {
        postID: id,
        veriToken: veri,
        postTitle: title,
        category,
        tags: tags ? tags.split(' ') : [],
        shortDesc: description,
        longDesc: content,
        externalLinks: links ? links.replace(/\r/g, "").split(/\n/) : [],
        cellNumber: phone,
        email, 
        subCategory,
        date: new Date().toDateString().slice(4,15)
      }

      await postsRef.add(alternateValues);
      if (!updating) {
        await sendEmailLink(email,
        `https:\colab-sfhacks-firebase.web.app\edit?${veri}`,
        `https:\colab-sfhacks-firebase.web.app\delete?${veri}`
      )}
      setSubmitting(false);
      history.push(`/post?id=${id}`)
    }

  const updateForm = () => {
    console.log('updating!!!!')
  }

  return (<Formik
    initialValues={pastValues || {
      title: '',
      email: '',
      description: '',
      message: '',
      content: '',
      category: '',
      subCategory: '',
      phone: '',
      tags: '',
      links: '',
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
    onSubmit={submitForm}
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
            <CustomInput type="text" name="phone" label="Phone Number (optional)"/>
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