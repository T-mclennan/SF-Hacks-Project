import React from 'react'
import { Link,
  useLocation
} from "react-router-dom";
import ReactMarkdown from "react-markdown"
import {mockData} from '../../constants/mock'
import Title from '../../components/Title'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// https://colab-sfhacks-firebase.web.app/edit?id=IDENTIFIER
// https://colab-sfhacks-firebase.web.app/delete?id=IDENTIFIER
const Post = () => {

  console.log(mockData[1])
  let query = useQuery();
  const id = query.get("id")
  const {email, cellNumber, postTitle, tags, shortDesc, longDesc, externalLinks} = mockData[1];
  const tagList = tags ? tags.split(' ') : [];
  const links = externalLinks ? externalLinks.replace(/\r/g, "").split(/\n/) : [];
  
  return (
    <section className="post-page">
      <div className="post-section-center">
        <div className="section-title">
            <h2>{postTitle || 'default title'}</h2>
            <p style={{margin: '0.5rem'}}>{shortDesc}</p>
            <span><a href={email} style={{textAlign: 'center'}}>{email} - 03/07/2021</a></span>
            {links.map((link, i) => {
              return <a href={link} key={i}>{link}</a>
            })}
            <div className="underline"></div>
        </div>

        <article className="post-content">
          <ReactMarkdown source={longDesc} escapeHtml={false}/>
        </article>

        <div className="post-tags">
          {tagList.map((tag, i) => {
            return <span key={i}>{tag}</span>
          })}
        </div>
        <Link to="/browse" className="btn center-btn">Back to Posts</Link>
      </div>
    </section>
  )
}

export default Post