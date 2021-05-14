import React from 'react'
import ContactForm from '../../components/form/ContactForm'
import Title from '../../components/Title'

function ContactPage() {
  return (
    <section className="contact-page">
      <Title title="Contact Our Team" mb='1rem'/>
      <article className="contact-form">
        <ContactForm />
      </article>
    </section>
  )
}

export default ContactPage
