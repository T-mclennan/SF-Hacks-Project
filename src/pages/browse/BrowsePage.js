import React, {useLayoutEffect, useState} from 'react'
import {firestore} from '../../firebase/index'
import 'firebase/firestore';
import PostSample from '../../components/PostSample'
import '../Pages.css'

function BrowsePage() {

  const [postList, setPostList] = useState([])

  const postsRef = firestore.collection('post_content');

  const fetchPosts = async () => {
    const data=await postsRef.get();
    data.docs.forEach(item=>{
      setPostList(oldPosts => [...oldPosts, item.data()])
     })
  }

  useLayoutEffect(() => {
    fetchPosts()
  }, []);

  return (
    <section className="browse-page">
      <div className="browse-navbox">

      </div>

      <div className="browse-content-container">
        {postList.map((post, i) => {
          return <PostSample key={i} {...post} />
        })}
      </div>
    </section>
  )
}

export default BrowsePage
