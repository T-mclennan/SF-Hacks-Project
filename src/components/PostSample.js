import React from "react"
import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"
import {colors} from '../constants'

import './PostSample.css'


// const colors = {
//   projects: 'rgb(111, 31, 160)',
//   people: 'rgb(4, 120, 182)',
//   paid: 'rgb(1, 148, 104)',
//   mentorship: 'rgb(235, 137, 18)',
//   study: 'rgb(189, 72, 4)',
//   misc: 'rgb(110, 7, 15)'
// }

const PostSample = ({title, tags, content, category, pid}) => {
  const {light, dark} = colors[`${category}`];
  return (
    <Link to={`/post?id=${pid}`} className="blog" key={pid}>
      <article>
        <div className="blog-tag" style={
          {backgroundImage: `linear-gradient(115deg, ${dark} 0%, ${light} 74%)`}}>
          {category}
        </div>
        <div className="blog-card">

          <h2 style={{color: 'hsl(204, 77%, 34%)'}}>{title || 'default title'}</h2>
          <div className="description-container">
            <p className="blog-description">{content}</p>
          </div>
          <div className="blog-footer">
            <div className="post-tags">
              {tags && tags.split(' ').map((tag, i) => {
                return <span key={i}>{tag}</span>
              })}
            </div>
          </div>
        </div>
      </article>
    </Link>
    )
}

export default PostSample
