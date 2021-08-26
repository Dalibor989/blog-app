import React from 'react';

function SinglePost({
  id,
  title,
  text,
  handleEditPost,
}) {
  return (
    <li>
      <span><strong>{title}</strong></span><br />
      <span><p>{text}</p></span>
      <button onClick={() => handleEditPost(id)}>View Post</button><br />
    </li>
  )
}

export default SinglePost;