import React, {useState, useEffect} from "react";
import postService from "../services/PostService";
import { useHistory } from 'react-router-dom';

function AddPost() {
  const history = useHistory();

  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
  })

  const createPost = async (e) => {
    e.preventDefault();

    await postService.add(newPost);

    setNewPost({
      title: '',
      text: '',
    });

    history.push('/posts');
  }

  const handleTitleChange = (e) => {
    setNewPost({
      ...newPost,
      title: e.target.value
    })
  }

  const handleTextChange = (e) => {
    setNewPost({
      ...newPost,
      text: e.target.value
    })
  }

  const reset = () => {
    setNewPost({
      title: '',
      text: '',
    })
  }

  return (
    <div>
      <form onSubmit={createPost}>
        <input required minLength="2" type="text" placeholder="title" value={newPost.title} onChange={handleTitleChange}/>
        <input required maxLength="300" type="text" placeholder="text" value={newPost.text} onChange={handleTextChange}/>
        <button>Post</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    </div>
  )
}

export default AddPost;