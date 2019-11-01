import React from 'react';

export default function UsersArticlesCard({ article }) {
  return (
    <li key="usersArticleCards" className="users-article-container">
      <div className="users-article-item firstItem">{article.title}</div>
      <div>Comments:{article.comment_count}</div>
      <div>Topic:{article.topic}</div>
      <div>Votes:{article.votes}</div>
    </li>
  );
}
