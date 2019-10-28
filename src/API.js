import axios from 'axios';

export const axiosGetArticles = articleID => {
  return axios.get(
    `https://nc-news-jonno.herokuapp.com/api/articles/${articleID}`
  );
};
