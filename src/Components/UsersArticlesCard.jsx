import React from 'react';
import Voter from './Voter';
import { Link } from '@reach/router';

export default function UsersArticlesCard({ article, user }) {
  return (
    <li key="usersArticleCards" className="users-article-container">
      <div className="users-article-item firstUAItem">
        {' '}
        <Link to={`/articles/${article.article_id}`}>{article.title} </Link>
      </div>
      <div className="users-article-item secondUAItem">
        Comments:{article.comment_count}
      </div>
      <div className="users-article-item thirdUAItem">
        Topic: {article.topic}
      </div>
      <div className="users-article-item fourthUAItem">
        <Voter
          id={article.article_id}
          votes={article.votes}
          beingUpdated="article"
        />
      </div>
    </li>
  );
}
