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
      console.log(data);
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
    console.log(data);
    return data;
  });
};
