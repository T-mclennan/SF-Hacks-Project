import React from 'react'
import ContactForm from '../../components/form/ContactForm'
import Title from '../../components/Title'
import ContactImage from '../../assets/contact_us.svg';

function ContactPage() {
  return (
    <section className="contact-page">
      <img src={ContactImage} className="contact-image" alt="sending mail"/>
      <Title title="Contact Our Team" mb='1rem'/>
      <article className="contact-form" >
        <ContactForm />
      </article>
    </section>
  )
}

export default ContactPage
