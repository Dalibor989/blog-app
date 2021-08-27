import React, {useState, useEffect} from "react";
import postService from "../services/PostService";
import SinglePost from "../components/SinglePost";
import { useHistory } from 'react-router-dom';

function AppPosts() {
  const history = useHistory();
  const [posts, setPost] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAll();

      setPost(data);
    };

    fetchPosts();
  }, []);

  const viewPost = (id) => {
    history.push(`posts/${id}`);
  };

  const editPost = (id) => {
    history.push(`edit/${id}`)
  }

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <SinglePost 
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            handleViewPost={viewPost}
            handleEditPost={editPost}
          />
        ))}
      </ul>
    </div>
  )
}

export default AppPosts;