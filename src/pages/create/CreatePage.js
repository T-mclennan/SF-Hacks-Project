import React from 'react'
import PostForm from '../../components/form/PostForm'
import Title from "../../components/Title";
import '../Pages.css'

function CreatePage() {

  const mockData = {
    title: 'Some Post Title!',
    email: 'myEmail@mail.sfsu.edu',
    description: 'This is my mockup post',
    content: 'Content, content content',
    category: 'projects',
    phone: '(415) 222-3333',
    tags: 'tag1',
  }

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
