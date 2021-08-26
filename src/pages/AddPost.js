import React, {useState, useEffect} from "react";
import postService from "../services/PostService";

function AddPost() {
  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
  })

  const createPost = async (e) => {
    e.preventDefault();

    postService.add(newPost);

    setNewPost({
      title: '',
      text: '',
    })
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

  return (
    <div>
      <form onSubmit={createPost}>
        <input type="text" placeholder="title" value={newPost.title} onChange={handleTitleChange}/>
        <input type="text" placeholder="text" value={newPost.text} onChange={handleTextChange}/>
        <button>Post</button>
      </form>
    </div>
  )
}

export default AddPost;