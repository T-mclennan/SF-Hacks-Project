import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import {firestore} from '../../firebase/index'
import 'firebase/firestore';
import PostForm from '../../components/form/PostForm'
import '../Pages.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Edit() {

    //Fetch parameter passed in through URL
    let paramQuery = useQuery();
    const paramID = paramQuery.get("ver")
    const [data, setData] = useState(null)
  
    //Create firestore query for that ID
    const postsRef = firestore.collection('posts');

    const fetchPosts = async () => {
      const data=await postsRef.get();
      data.docs.forEach(item=>{
        const {postID} = item.data()
        if (postID === `${paramID}`) {
          console.log(item.data())
          setData(item.data())
        }
      })
    }
  
    useLayoutEffect(() => {
      fetchPosts()
    }, []);
    
  
  return (
    <section className="create-page">
        <article className="contact-form">
          <h3>Edit a Post</h3>
          {data && <PostForm 
            updating={true} 
            // pastValues={
            //   postTitle: data.title,
            //   category,
            //   tags: tags.join('')
            //   description: shortDesc,
            //   content: longDesc,
            //   links: ''
            //   phone: cellNumber,
            //   email, 
            //   subCategory,
            // }
          />}
        </article>
    </section>
  )
}

export default Edit
