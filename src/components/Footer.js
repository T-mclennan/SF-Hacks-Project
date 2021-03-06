import React from "react"
import './Footer.css'

const Footer = () => {
  return (<footer className="footer">
      <div>
        <h4>copyright&copy;{new Date().getFullYear()}
          <span>CoLabs</span> all rights reserved
        </h4>
      </div>
    </footer>)
}

export default Footer