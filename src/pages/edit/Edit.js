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
    const postsRef = firestore.collection('post_content');

    const fetchPosts = async () => {
      const data=await postsRef.get();
      data.docs.forEach(item=>{
        const {vid} = item.data()
        if (vid === `${paramID}`) {
          setData(item.data())
        }
      })
    }
  
    useLayoutEffect(() => {
      fetchPosts()
    }, []);
    
  
  return (
    <section className="create-page">
        <article className="contact-form ">
          {
            data ? <h3>Edit a Post</h3>   
                 : <>
                      <p className="edit-page-header">No posts were found with that ID.</p>
                      <Link to="/" className="btn center-btn">Back Home</Link>
                   </>
          }

          {data && <PostForm 
            updating={true} 
            pastValues={data}
          />}
        </article>
    </section>
  )
}

export default Edit
