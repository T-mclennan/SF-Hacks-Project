import React, {useLayoutEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import {firestore} from '../../firebase/index';
import 'firebase/firestore';
import PostSample from '../../components/PostSample';
import '../Pages.css';

function BrowsePage() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const postsRef = firestore.collection('post_content');

  const fetchPosts = async () => {
    setIsLoading(true);
    const data=await postsRef.get();
    data.docs.forEach(item=>{
      setPostList(oldPosts => [...oldPosts, item.data()]);
     })
    setIsLoading(false);
  }

  useLayoutEffect(() => {
    fetchPosts();
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

      {isLoading && 
            <div className="loadingScreen">
                <Loader type="ThreeDots" color="hsl(205, 84%, 25%)" height={80} width={80} margin="auto"/>
            </div>
          }
    </section>
  )
}

export default BrowsePage
