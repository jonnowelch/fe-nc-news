import React from 'react';
import ArticleCard from './ArticleCard';

export default function ArticleList({ articles }) {
  return (
    <ul key="articleList">
      {articles.map(article => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
}
