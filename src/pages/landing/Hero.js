import React from 'react';
import HeaderImage from '../../assets/hero-img.svg';
import TextLoop from "react-text-loop";
import {TextLoopValues} from '../../constants/config';
import { useHistory } from "react-router-dom";
import './Landing.css';

function Hero() {

  const history = useHistory();

  return (
    <section className="hero">
      
      <div className="section-center hero-center">
        <article className="hero-info">
            <div className="underline"></div>
            <h1>Discover New Collaborations</h1>
            <h4>Bulletin board for {" "}
            <TextLoop 
              children={TextLoopValues} 
              interval={5500}
            />
            </h4>
            <button onClick={() => history.push("/browse")} className="btn">
              browse listings
            </button>
        </article>
        <img src={HeaderImage} className="hero-img" alt="two students collaborating"/>
      </div>

      <div className="custom-shape-divider-bottom-1615009014">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
      </div>
    </section>
  )
}

export default Hero