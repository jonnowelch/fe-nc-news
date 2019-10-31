import React from 'react';
import Voter from './Voter';
// import CommentVote from './CommentVote';

export default function CommentCard({ comment, handleDeleteComment }) {
  return (
    <li key="commentCards" className="comment-container">
      <div className="comment-item firstCommentItem">{comment.body}</div>
      <div className="comment-item secondCommentItem">
        Posted by : {comment.author}
      </div>
      <div className="comment-item thirdCommentItem">
        Posted at : {comment.created_at}
      </div>
      <div className="comment-item fourthCommentItem">
        <Voter
          id={comment.comment_id}
          votes={comment.votes}
          beingUpdated="comment"
        />
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

//Warning: This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the property `target` on a released/nullified synthetic event. This is set to null. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.
