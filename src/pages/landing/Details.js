import React from "react";
import Title from "../../components/Title";
import details from "../../constants/details";
import './Landing.css';

const Details = () => {
  return (
    <section className="section">
      <div className="details-section">
      <Title title="Connect With Peers"/>
      <div className="section-center details-center">
        {details.map((service) => {
          const {id, icon, title, text} = service;
          return <article key={id} className="details">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        })}
      </div>
      </div>
    </section>

  )
}

export default Details