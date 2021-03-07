import React from 'react'
import {
  useLocation
} from "react-router-dom";
import {mockData} from '../../constants/mock'
import '../Pages.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// https://colab-sfhacks-firebase.web.app/edit?id=IDENTIFIER
// https://colab-sfhacks-firebase.web.app/delete?id=IDENTIFIER
const Post = () => {

  let query = useQuery();
  const id = query.get("id")
  console.log(query)
  console.log(id)

  return (
    <section className="create-page">
        <article className="contact-form">
          <h3>Create a Post {id}</h3>
        </article>
    </section>
  )
}

export default Post