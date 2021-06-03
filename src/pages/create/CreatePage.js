import React from 'react'
import PostForm from '../../components/form/PostForm'
import Title from "../../components/Title";
import '../Pages.css'

function CreatePage() {

  return (
    
    <section className="create-page">
        <Title title="Create a New Post" mb='1rem'/>
        <article className="contact-form">
          <PostForm />
        </article>
    </section>
  )
}

export default CreatePage
