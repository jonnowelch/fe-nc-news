import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-jonno.herokuapp.com/api'
});

export const axiosGetArticles = (topic, sortBy) => {
  return request
    .get('/articles', {
      params: {
        topic,
        sort_by: sortBy
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getIndividualArticle = articleid => {
  return request.get(`/articles/${articleid}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleID = articleid => {
  return request.get(`/articles/${articleid}/comments`).then(({ data }) => {
    return data;
  });
};

export const getArticlesVotes = articleid => {
  return request.get(`/articles/${articleid}/comments`).then(({ data }) => {
    return data;
  });
};

export const postCommentToArticle = (username, body, articleid) => {
  return request.post(`/articles/${articleid}/comments`, { body, username });
};

export const getComments = articleid => {
  return request.get(`/articles/${articleid}/comments`);
};

export const deleteCommentByCommentId = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

export const getAllUsers = () => {
  return request.get('/users').then(({ data }) => {
    return data;
  });
};

export const upVoteArticle = articleID => {
  return request
    .patch(`/articles/${articleID}`, { inc_vote: 1 })
    .then(({ data }) => {
      return data;
    });
};

export const downVoteArticle = articleID => {
  return request
    .patch(`/articles/${articleID}`, { inc_vote: -1 })
    .then(({ data }) => {
      return data;
    });
};

export const upVoteComment = commentID => {
  return request
    .patch(`/comments/${commentID}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data;
    });
};

export const downVoteComment = commentID => {
  return request
    .patch(`/comments/${commentID}`, { inc_votes: -1 })
    .then(({ data }) => {
      return data;
    });
};

export const changeArticleVotes = (articleid, inc_vote) => {
  return request
    .patch(`/articles/${articleid}`, { inc_vote })
    .then(({ data }) => {
      return data;
    });
};

export const changeCommentVotes = (comment_id, inc_votes) => {
  // console.log(comment_id, 'id here');
  // console.log(inc_votes, 'votes here');
  return request
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};
