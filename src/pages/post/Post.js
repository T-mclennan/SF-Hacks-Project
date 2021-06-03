import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown"
import {firestore} from '../../firebase/index'
import HeaderContainer from '../../components/HeaderContainer'
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
      const {pid} = item.data()
      if (pid === `${paramID}`) {
        setData(item.data())
      }
     })
  }

  useLayoutEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div className="page-wrapper">

      <section className="post-page">
        <HeaderContainer tint={true}>
          <h2>This is a header container!</h2> 
        </HeaderContainer>
        {/* { data && <div className="post-section-center">
          <div className="section-title">
              <h2>{data.title || 'default title'}</h2>
              <p style={{margin: '0.5rem'}}>{data.description}</p>
              <span><a href={data.email} style={{textAlign: 'center'}}>{data.email} - {data.date}</a></span>
              <div className="underline"></div>
          </div>

          <article className="post-content">
            <div style={{width: '80%'}}>
              <ReactMarkdown >{data.content}</ReactMarkdown>
            </div>
          </article>

          <div className="post-tags">
            {data.tags && data.tags.split(' ').map((tag, i) => {
              return <span key={i}>{tag}</span>
            })}
          </div>
          <Link to="/browse" className="btn center-btn">Back to Posts</Link>
        </div> } */}
      </section>
    </div>
  )
}

export default Post