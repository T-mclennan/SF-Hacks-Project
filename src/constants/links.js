import React from "react"
import {Link} from "react-router-dom";

const data = [
  {
    id: 1,
    text: "about",
    url: "/about/",
  },
  {
    id: 2,
    text: "browse",
    url: "/browse/",
  },
  {
    id: 3,
    text: "create",
    url: "/create/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
]

/**
 * links is a factory function that generates an li with navbar links.
 * @function
 * @param {string} props.styleClass - applies different list styling for sidebar component
 * @param {function} props.toggle - opens and closes the sidebar
 * @returns {JSX.element} 
 */
const links = ({ styleClass, toggle }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {/* {tempLinks} */}
      {data.map(link => {
        return (
          <li key={link.id}>
            {toggle ? 
              <Link data-test="component-sidebar-link" to={link.url} onClick={() => toggle()}>{link.text}</Link> :
              <Link data-test="component-navbar-link"to={link.url} >{link.text}</Link>
            }
          </li>
        )
      })}
    </ul>
  )
}

export default links;