import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown"
// import {mockData} from '../../constants/mock'
import {firestore} from '../../firebase/index'
import 'firebase/firestore';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Post = () => {

  const [data, setData] = useState(null)

  //Fetch parameter passed in through URL
  let paramQuery = useQuery();
  const paramID = paramQuery.get("id")

  //Create firestore query for that ID
  const postsRef = firestore.collection('posts');

  const fetchPosts = async () => {

    const data=await postsRef.get();
    data.docs.forEach(item=>{
      const {postID} = item.data()
      if (postID === `${paramID}`) {
        setData(item.data())
      }
     })
  }

  useLayoutEffect(() => {
    fetchPosts()
  }, []);

  return (
    <section className="post-page">
      { data && <div className="post-section-center">
        <div className="section-title">
            <h2>{data.postTitle || 'default title'}</h2>
            <p style={{margin: '0.5rem'}}>{data.shortDesc}</p>
            <span><a href={data.email} style={{textAlign: 'center'}}>{data.email} - {data.date}</a></span>
            {data.externalLinks && data.externalLinks.map((link, i) => {
              return <a href={link} key={i}>{link}</a>
            })}
            <div className="underline"></div>
        </div>

        <article className="post-content">
          <ReactMarkdown source={data.longDesc} escapeHtml={false}/>
        </article>

        <div className="post-tags">
          {data.tags && data.tags.map((tag, i) => {
            return <span key={i}>{tag}</span>
          })}
        </div>
        <Link to="/browse" className="btn center-btn">Back to Posts</Link>
      </div> }
    </section>
  )
}

export default Post