import React from 'react'
import Title from '../../components/Title'
import HeaderImage from '../../assets/add-note.svg';
import './Landing.css';

function Wedge() {
  return (
    // <div className="action-wedge section-center">
    //   <div className="underline"></div>
    //   <h3 style={{width: '27rem'}}>Contribute to the community</h3>
    //   <div className="wedge-btn-container">
    //     <button className="btn">Create A Post</button>
    //   </div>
    // </div>
    <div className="action-wedge">
      <img src={HeaderImage} className="wedge-image" alt="two students collaborating"/>
      <article className="wedge-info">
        <div className="wedge-content"></div>
          <div className="underline" style={{marginLeft: '0'}} />
          <h2 >Contribute to the community</h2>
          <div className="wedge-btn-container">
          <button className="btn">Create Post</button>
        </div>
      </article>
    </div>
  )
}

export default Wedge
