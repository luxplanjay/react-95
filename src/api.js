import axios from 'axios';

export const fetchArticles = async (query, page) => {
  const response = await axios.get(`http://hn.algolia.com/api/v1/search`, {
    params: { query, page, hitsPerPage: 10 },
  });

  return response.data.hits;
};
