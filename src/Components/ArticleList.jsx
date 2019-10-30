import React from 'react';
import ArticleCard from './ArticleCard';

export default function ArticleList({ articles }) {
  return (
    <div>
      <ul key="articleList">
        {articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
}
