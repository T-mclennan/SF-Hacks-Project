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



const PostSample = ({postTitle, tags, shortDesc, image, date, category, postID}) => {
  return (
    <Link to={`/post?id=${postID}`} className="blog" key={postID}>
      <article>
 
        <div className="blog-card">
          <div className="blog-header-container">

          </div>
          <h2 style={{color: 'hsl(204, 77%, 34%)'}}>{postTitle || 'default title'}</h2>
          <h4>{shortDesc}</h4>
          <div className="blog-footer">
          <div className="post-tags">
            {tags && tags.map((tag, i) => {
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
