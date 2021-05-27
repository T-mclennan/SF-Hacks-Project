import React, {useLayoutEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import {firestore} from '../../firebase/index'
import Loader from 'react-loader-spinner'
import 'firebase/firestore';
import '../Pages.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Delete() {

  //Fetch parameter passed in through URL
  let paramQuery = useQuery();
  const paramID = paramQuery.get("ver")
  const [found, setFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  //Create firestore query for that ID
  const postsRef = firestore.collection('post_content');

  const deletePosts = async () => {
    setIsLoading(true);
    postsRef.where("vid", "==", paramID)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            setFound(true);
            console.log(doc.id, " => ", doc.data());
            doc.ref.delete()
        });
        setIsLoading(false);
    }).catch(e => {
      console.error(e)
      setIsLoading(false);
    });
  }

  useLayoutEffect(() => {
    deletePosts();
  }, []);

  const successContent = 
    <article className="contact-form ">
      <p className="edit-page-header">Post Deleted Successfully.</p>
      <Link to="/" className="btn center-btn">Back Home</Link>
    </article>

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
          {!isLoading && (found ? successContent : errorContent)}
    </section>
  )
}

export default Delete
