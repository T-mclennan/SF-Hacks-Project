import React from 'react'
import HeaderImage from '../../assets/ideas.svg';
import Title from '../../components/Title'
import {aboutContent} from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../Pages.css'

const ContentParagraph = ({question, content}) => {
  return (
    <div className="text-section">
      <div className="about-content-title">
        <FontAwesomeIcon className="about-icon" icon={faStar} />
        <h3>{question}</h3>
      </div>
      <p>{content}</p>
    </div>
  )
}

function About() {
  return (
    <section className="about-page">
      <article className="about-header-box">
        <Title title="About CoLabs" mb='1rem'/>
        <img src={HeaderImage} className="header-image" alt="two students collaborating"/>
      </article>
      <div className="about-content-wrapper">
        <article className="about-content">
          {
            aboutContent.map(({question, content}) => (
              <ContentParagraph question={question} content={content}/>
            ))
          }
        </article>
      </div>
    </section>
  )
}

export default About
