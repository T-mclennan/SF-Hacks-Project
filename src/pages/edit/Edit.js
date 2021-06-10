import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import {firestore} from '../../firebase/index'
import Loader from 'react-loader-spinner'
import 'firebase/firestore';
import PostForm from '../../components/form/PostForm'
import Title from "../../components/Title";
import '../Pages.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Edit() {

    //Fetch parameter passed in through URL
    let paramQuery = useQuery();
    const paramID = paramQuery.get("ver")
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
  
    //Create firestore query for that ID
    const postsRef = firestore.collection('post_content');

    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await postsRef.get();
      data.docs.forEach(item=>{
        const {vid} = item.data()
        if (vid === `${paramID}`) {
          setData(item.data())
        }
      })
      setIsLoading(false);
    }
  
    useLayoutEffect(() => {
      fetchPosts();
    }, []);
    
  const editFormContent = 
    <>
      <Title title="Edit a Post" mb='1rem' style="light"/>
      <article className="contact-form ">
        <PostForm 
          updating={true} 
          pastValues={data}
        /> 
      </article> 
    </>

  const errorContent = 
    <article className="contact-form ">
      <p className="edit-page-header">No posts were found with that ID.</p>
      <Link to="/" className="btn center-btn">Back Home</Link>
    </article>
  
  return (
    <section className="create-page">
          {isLoading && 
            <div className="loadingScreen">
                <Loader type="ThreeDots" color="hsl(205, 84%, 25%)" height={80} width={80} margin="auto"/>
            </div>
          }
          {!isLoading && (data ? editFormContent : errorContent)}
    </section>
  )
}

export default Edit
