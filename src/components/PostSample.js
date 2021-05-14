import React from "react"
import { Link } from "react-router-dom"
import './PostSample.css'


const colors = {
  projects: '',
  people: '',
  paid: '',
  mentorship: '',
  study: '',
  misc: ''

}

const PostSample = ({title, tags, description, image, date, category, pid}) => {
  return (
    <Link to={`/post?id=${pid}`} className="blog" key={pid}>
      <article>
 
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
