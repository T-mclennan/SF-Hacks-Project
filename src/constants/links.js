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

// const tempLinks = data.map(link => {
//   return (
//     <li key={link.id}>
//       <Link to={link.url}>{link.text}</Link>
//     </li>
//   )
// })

const sideLink = ({ styleClass, toggle }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {/* {tempLinks} */}
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url} onClick={() => toggle()}>{link.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default sideLink;