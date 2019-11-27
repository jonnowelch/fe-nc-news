import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

export default function ArticleCard({ article }) {
  return (
    <li key="articleCards" className="article-container">
      <div className="article-item fifthItem">
        <Link to={`articles/${article.article_id}`}>{article.title}</Link>
      </div>
      <div className="article-item firstItem">
        <Link to={`/users/${article.author}`}>{article.author} </Link>
      </div>
      <div className="article-item secondItem">
        Comments:{article.comment_count}
      </div>
      <div className="article-item thirdItem">Topic: {article.topic}</div>
      <div className="article-item fourthItem">
        <Voter
          id={article.article_id}
          votes={article.votes}
          beingUpdated="article"
        />
      </div>
    </li>
  );
}
