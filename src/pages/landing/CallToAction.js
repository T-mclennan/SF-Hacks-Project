import React from 'react'
import HeaderImage from '../../assets/hero-img.svg';
import { useHistory } from "react-router-dom";
import './Landing.css';

function CallToAction() {

  const history = useHistory();

  return (
    <section className="action">
      <div class="custom-shape-divider-top-1617676600">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
      </div>
      
      <div className="action-text">
        Create Together
      </div>

      <div className="custom-shape-divider-bottom-1617677217">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
    </section>
  )
}

export default CallToAction
