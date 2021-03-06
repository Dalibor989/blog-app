import React, { useState } from "react";
import postService from "../services/PostService";

function AddComment({postId}) {
  const [comment, setComment] = useState({
    text: ''
  });

  const addComment = async (e) => {
    e.preventDefault();

    await postService.addComment(comment, postId);

    setComment({
      text: ''
    });
  }

  const handleCommentChange = (e) => {
    setComment({
      ...comment,
      text: e.target.value,
    })
  }

  return (
    <div>
      <form onSubmit={addComment}>
        <input required type="text" key={comment.id} value={comment.text} onChange={handleCommentChange} placeholder="comment..."/>
        <button>Comment</button>
      </form>
    </div>
  )
}

export default AddComment;