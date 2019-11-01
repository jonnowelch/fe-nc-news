import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-jonno.herokuapp.com/api'
});

export const axiosGetArticles = (topic, sortBy, author) => {
  return request
    .get('/articles', {
      params: {
        topic,
        sort_by: sortBy,
        author
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

export const getUserByUserID = username => {
  return request.get(`/users/${username}`).then(({ data }) => {
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
  return request
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getTopics = () => {
  return request.get('/topics').then(({ data }) => {
    return data;
  });
};
