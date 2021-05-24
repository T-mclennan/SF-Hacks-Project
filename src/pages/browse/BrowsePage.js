import React, {useLayoutEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import {firestore} from '../../firebase/index';
import 'firebase/firestore';
import PostSample from '../../components/PostSample';
import BrowseInput from '../../components/form/BrowseInput'
import '../Pages.css';

function BrowsePage() {
  const [totalPosts, setTotalPosts] = useState([]);
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(null)

  const postsRef = firestore.collection('post_content');

  const fetchPosts = async () => {
    setIsLoading(true);
    const data=await postsRef.get();
    data.docs.forEach(item=>{
      setTotalPosts(oldPosts => [...oldPosts, item.data()]);
      setPostList(oldPosts => [...oldPosts, item.data()]);
     })
    setIsLoading(false);
  }

  const updateCategory = (category) => {
    setCategory(category);
    const filteredList = totalPosts.filter((post) => {
      return post.category === category;
    })
    setPostList(filteredList);
  }

  useLayoutEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="browse-page">
      <BrowseInput updateCategory={updateCategory}/>

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
