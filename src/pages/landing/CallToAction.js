import React from 'react'
import HeaderImage from '../../assets/hero-img.svg';
import { useHistory } from "react-router-dom";
import './Landing.css';

function CallToAction() {

  const history = useHistory();

  return (
    <section className="hero">
      {/* <div class="custom-shape-divider-top-1615070323">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
          </svg>
      </div> */}
      
      <div className="section-center hero-center">

      </div>
    </section>
  )
}

export default CallToAction
