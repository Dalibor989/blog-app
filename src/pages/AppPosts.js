import React, {useState, useEffect} from "react";
import postService from "../services/PostService";

function AppPosts() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAll();

      setPost(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppPosts;