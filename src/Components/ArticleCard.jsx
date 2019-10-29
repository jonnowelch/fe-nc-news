import React from 'react';
import { Link } from '@reach/router';

export default function ArticleCard({ article }) {
  return (
    <li key="articleCards">
      <div>
        <Link to={`articles/${article.article_id}`}>{article.title}</Link>
      </div>
      <div>Author: {article.author}</div>
      <div>Comments:{article.comment_count}</div>
      <div>Topic: {article.topic}</div>
      <div>Votes: {article.votes}</div>
    </li>
  );
}
