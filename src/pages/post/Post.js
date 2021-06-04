import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown"
import Loader from 'react-loader-spinner';
import {firestore} from '../../firebase/index'
import HeaderContainer from '../../components/HeaderContainer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import 'firebase/firestore';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Post = () => {

  const [data, setData] = useState(null)
  const [postDate, setPostDate] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  //Fetch parameter passed in through URL
  let paramQuery = useQuery();
  const paramID = paramQuery.get("id")

  //Create firestore query for that ID
  const postsRef = firestore.collection('post_content');

  const fetchPosts = async () => {
    setIsLoading(true);
    const data=await postsRef.get();
    data.docs.forEach(item=>{
      const {pid, dateCreated} = item.data()
      if (pid === `${paramID}`) {
        setData(item.data())
        setPostDate(dateCreated.toDate().toLocaleDateString())
      }
     })
     setIsLoading(false);
  }

  useLayoutEffect(() => {
    fetchPosts()
  }, []);


  return (
    <section className="post-page">
      { data && <>
        <HeaderContainer category={data.category}>
            <h1 className="header-title">{data.title || 'default title'}</h1>
            <div className="subheader">
              <span className='subheader-item'>
                <FontAwesomeIcon className="icon" icon={faUser} />
                {data.email}
              </span>
              <span className='subheader-item'>
                <FontAwesomeIcon className="icon" icon={faCalendarWeek} />
                {postDate}
              </span>
            </div>
        </HeaderContainer>
        <article className="post-content">
          <div style={{width: '80%'}}>
            {data.content}
          </div>
          <div className="post-tags">
            {data.tags && data.tags.split(' ').map((tag, i) => {
              return <span key={i}>{tag}</span>
            })}
          </div>
          <Link to="/browse" className="btn center-btn">Back to Posts</Link>
        </article>
        </>
      }

      {isLoading && 
        <div className="loadingScreen">
            <Loader type="ThreeDots" color="hsl(205, 84%, 25%)" height={80} width={80} margin="auto"/>
        </div>
      }
    </section>
  )
}

export default Post