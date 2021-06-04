import React from 'react';
import {colors} from '../constants';
import './HeaderContainer.css';

function HeaderContainer({category, children}) {
  
  const {light, dark} = colors[`${category}`];
  
  return (
    <div className="background-wrapper" style={{
        backgroundImage: `linear-gradient(315deg, ${dark} 0%, ${light} 74%)`,
      }}>
      <div className="hero-container">
        {children}
      </div>
    </div>
  )
}

export default HeaderContainer
