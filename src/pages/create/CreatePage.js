import React from 'react'
import PostForm from '../../components/form/PostForm'

import '../Pages.css'

function CreatePage() {
  return (
    <section className="create-page">
        <article className="contact-form">
          <h3>Create a Post</h3>
          <PostForm/>
        </article>
    </section>
  )
}

export default CreatePage
