import React from "react"
import { Link } from "react-router-dom"
import './PostSample.css'


const colors = {
  projects: 'rgb(111, 31, 160)',
  people: 'rgb(4, 120, 182)',
  paid: 'rgb(1, 148, 104)',
  mentorship: 'rgb(235, 137, 18)',
  study: 'rgb(189, 72, 4)',
  misc: 'rgb(110, 7, 15)'

}

const PostSample = ({title, tags, description, image, date, category, pid}) => {
  return (
    <Link to={`/post?id=${pid}`} className="blog" key={pid}>
      <article>
        <div className="blog-tag" style={{backgroundColor: colors[`${category}`]}}>
          {category}
        </div>
        <div className="blog-card">
          <div className="blog-header-container">

          </div>
          <h2 style={{color: 'hsl(204, 77%, 34%)'}}>{title || 'default title'}</h2>
          <h4>{description}</h4>
          <div className="blog-footer">
          <div className="post-tags">
            {tags && tags.split(' ').map((tag, i) => {
              return <span key={i}>{tag}</span>
            })}
        </div>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
    )
}

export default PostSample
