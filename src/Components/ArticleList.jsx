import React from 'react';
import { Link } from '@reach/router';

export default function ArticleList({ articles }) {
  return (
    <table className="container" id="articlesList">
      <thead>
        <tr>
          <th> Title</th>
          <th> Topic</th>
          <th> Votes</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(articleItem => {
          return (
            <tr key={articleItem.article_id}>
              <td>
                <Link to={`/articles/${articleItem.article_id}`}>
                  {articleItem.title}
                </Link>
              </td>
              <td>{articleItem.topic}</td>
              <td>{articleItem.votes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
