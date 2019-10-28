import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-jonno.herokuapp.com/api'
});

export const axiosGetArticles = () => {
  return request.get('/articles').then(({ data }) => {
    return data;
  });
};
