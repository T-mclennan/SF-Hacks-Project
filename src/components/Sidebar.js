import React from "react"
import Links from "../constants/links"
import { FaTimes } from "react-icons/fa"
import './Sidebar.css'

const Sidebar = ({isOpen, toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen? 'show-sidebar' : ''}`}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen? 'sidebar-links-animate' : ''} sidebar-links`} toggle={toggleSidebar}/>
    </div>

  </aside>
}

export default Sidebar