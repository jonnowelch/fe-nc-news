import React from 'react';
import Voter from './Voter';

export default function CommentCard({
  comment,
  handleDeleteComment,
  loggedInUser
}) {
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
      {comment.author === loggedInUser ? (
        <button
          type="submit"
          id="deleteCommentButton"
          onClick={() => handleDeleteComment(comment.comment_id)}
        >
          Delete Comment
        </button>
      ) : (
        <> </>
      )}
    </li>
  );
}
