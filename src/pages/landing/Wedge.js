import React from 'react'
import HeaderImage from '../../assets/collab.svg';
import { useHistory } from "react-router-dom";
import './Landing.css';

function Wedge() {

  const history = useHistory();
  
  return (
    <div className="action-wedge">
      <img src={HeaderImage} className="wedge-image" alt="two students collaborating"/>
      <article className="wedge-info">
        <div className="wedge-content"></div>
          <div className="underline" style={{marginLeft: '0'}} />
          <h2 >Contribute to the community</h2>
          <div className="wedge-btn-container">
          <button onClick={() => history.push("/create")} className="btn">Create Post</button>
        </div>
      </article>
    </div>
  )
}

export default Wedge
