import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import postService from "../services/PostService";
import AddComment from '../components/AddComment';

function DetailedPost() {
  const { id } = useParams();
  const post = postService.get(id);

  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
  })

  useEffect(() => {
    const fetchPost = async () => {
      const { id: _, ...restData } = await postService.get(id);

      setNewPost({ ...restData });
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div>
      <h3>{newPost.title}</h3>
      <p>{newPost.text}</p>

      <div>
          <AddComment 
            postId={id}
          />
      </div>
    </div>
  )
}

export default DetailedPost;