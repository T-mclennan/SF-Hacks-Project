import React from "react"
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import './Navbar.css'

/** 
 * Navbar Component
 * @function Navbar - Menu component with a toggle input for controlling sidebar state.
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered component
*/
const Navbar = ({toggleSidebar}) => {

  const history = useHistory();
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} style={{cursor: 'pointer'}} alt="logo" onClick={() => history.push("/")}/>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar