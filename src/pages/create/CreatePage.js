import React from 'react'
import PostForm from '../../components/form/PostForm'
import Title from "../../components/Title";
import CreateImage from '../../assets/add-note.svg';
import '../Pages.css'

function CreatePage() {

  return (
    
    <section className="create-page">
        <img src={CreateImage} className="contact-image" alt="Working together onine"/>
        <Title title="Create a New Post" mb='1rem' style="light"/>
        <article className="contact-form">
          <PostForm />
        </article>
    </section>
  )
}

export default CreatePage
