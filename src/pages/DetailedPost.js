import { useParams } from "react-router-dom";
import postService from "../services/PostService";

function DetailedPost() {
  const { id } = useParams();
  const post = postService.get(id);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </div>
  )
}

export default DetailedPost;