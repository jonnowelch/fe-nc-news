import React from 'react';
// import CommentDeleter from './CommentDeleter';

export default function CommentCard({ comment, handleDeleteComment }) {
  return (
    <li key="commentCards" className="comment-container">
      <div className="comment-item firstCommentItem">
        Comment : {comment.body}
      </div>
      <div className="comment-item secondCommentItem">
        Posted by : {comment.author}
      </div>
      <div className="comment-item thirdCommentItem">
        Posted at : {comment.created_at}
      </div>
      <div className="comment-item fourthCommentItem">
        Votes : {comment.votes}
      </div>
      <button
        type="submit"
        id="deleteCommentButton"
        onClick={() => handleDeleteComment(comment.comment_id)}
      >
        Delete Comment
      </button>
    </li>
  );
}
