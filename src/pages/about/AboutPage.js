import React from 'react'
import HeaderImage from '../../assets/ideas.svg';
import Title from '../../components/Title'

function About() {
  return (
    <section className="about-page">
      <article className="about-header-box">
        <Title title="About CoLabs" mb='1rem'/>
        <img src={HeaderImage} className="header-image" alt="two students collaborating"/>
      </article>
      <article className="about-content">
        <div className="text-section">
          <h3>What is CoLabs and how is it used?</h3>
          <p>CoLabs is a project from the SFHacks hackathon 03/2021. It aims to create a bulletin
            board for students and designers to connect and collaborate on projects. Much like a traditional corkboard
            it's used by browsing the posts left by other contributors, or by creating a post yourself!
          </p>
        </div>
        <div className="text-section">
          <h3>How do I contact someone I find through this service?</h3>
          <p>CoLabs provides a platform for people to find each other and connect, but the act of contacting one another is left up to the users. 
            Each post should include a contact method as a required field, so a means of communication should be provided. Feel free to reach out to your peer!
          </p>
        </div>

        <div className="text-section">
          <h3>Do I have to sign up to use the product?</h3>
          <p>CoLabs provides a platform for people to find each other and connect, but the act of contacting one another is left up to the users. 
            Each post should include a contact method as a required field, so a means of communication should be provided. Feel free to reach out to your peer!
          </p>
        </div>

        <div className="text-section">
          <h3>How can I edit and delete my posts?</h3>
          <p>CoLabs provides a platform for people to find each other and connect, but the act of contacting one another is left up to the users. 
            Each post should include a contact method as a required field, so a means of communication should be provided. Feel free to reach out to your peer!
          </p>
        </div>

      </article>
    </section>
  )
}

export default About
