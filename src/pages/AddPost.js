import React, {useState, useEffect} from "react";
import postService from "../services/PostService";
import { useHistory, useParams } from 'react-router-dom';

function AddPost() {
  const history = useHistory();
  const { id } = useParams();

  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await postService.edit(id, newPost);
    } else {
      await postService.add(newPost);
    }

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
      <form onSubmit={handleSubmit}>
        <input required minLength="2" type="text" placeholder="title" value={newPost.title} onChange={handleTitleChange}/>
        <input required maxLength="300" type="text" placeholder="text" value={newPost.text} onChange={handleTextChange}/>
        <button>{id ? 'Edit' : 'Post'}</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    </div>
  )
}

export default AddPost;