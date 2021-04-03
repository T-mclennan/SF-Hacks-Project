import React from 'react'
import PostForm from '../../components/form/PostForm'
import Title from "../../components/Title";
import '../Pages.css'

function CreatePage() {
  return (
    
    <section className="create-page">
        {/* <Title title="Create New Post:"/> */}
        <article className="contact-form">
          <h3>Create New Post</h3>
          <PostForm/>
        </article>
    </section>
  )
}

export default CreatePage
