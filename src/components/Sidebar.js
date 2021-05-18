import React from "react";
import Links from "../constants/links";
import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';
import './Sidebar.css'; 

/**
 * Functional react component that is togglable from the navbar
 * @function setup
 * @param {boolean} props.isOpen  
 * @param {function} props.toggleSidebar - opens and closes the sidebar
 * @returns {ShallowWrapper}
 */
const Sidebar = ({isOpen, toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen? 'show-sidebar' : ''}`} data-test="component-sidebar" >
    <button className="close-btn" onClick={toggleSidebar} data-test="component-close-button">
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen? 'sidebar-links-animate' : ''} sidebar-links`} toggle={toggleSidebar}/>
    </div>

  </aside>
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func,
}

export default Sidebar