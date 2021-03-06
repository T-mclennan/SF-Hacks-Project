import React from 'react'

function ContactPage() {
  return (
    <section className="contact-page">
      {/* <div className="glass-wrapper"> */}
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xknplldl" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" name="name" className="form-control"/>
              <input type="email" placeholder="email" name="email" className="form-control"/>
              <textarea name="message" style={{resize: 'none'}} name="message" placeholder="message" id="" rows="5" className="form-control"/>
              <button type="submit" className="submit-btn btn">submit here</button>
            </div>
          </form>
        </article>
      {/* </div> */}
    </section>
  )
}

export default ContactPage
