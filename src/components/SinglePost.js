import React from 'react';

function SinglePost({
  id,
  title,
  text,
  handleViewPost,
  handleEditPost,
  handleDeletePost,
  comments,
}) {
  return (
    <li>
      <span><strong>{title}</strong></span><br />
      <span><p>{text}</p></span>
      <span><p>{comments.length}</p></span>
      <button onClick={() => handleViewPost(id)}>View Post</button>
      <button onClick={() => handleEditPost(id)}>Edit</button>
      <button onClick={() => handleDeletePost(id)}>Delete</button>
    </li>
  )
}

export default SinglePost;