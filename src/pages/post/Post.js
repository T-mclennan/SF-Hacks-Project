import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown"
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
  const postsRef = firestore.collection('post_content');

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
            {data.links && data.links.replace(/\r/g, "").split(/\n/).map((link, i) => {
              return <a href={link} key={i}>{link}</a>
            })}
            <div className="underline"></div>
        </div>

        <article className="post-content">
          <div style={{width: '80%'}}>
            <ReactMarkdown source={data.longDesc} escapeHtml={false}/>
          </div>
        </article>

        <div className="post-tags">
          {data.tags && data.tags.split(' ').map((tag, i) => {
            return <span key={i}>{tag}</span>
          })}
        </div>
        <Link to="/browse" className="btn center-btn">Back to Posts</Link>
      </div> }
    </section>
  )
}

export default Post