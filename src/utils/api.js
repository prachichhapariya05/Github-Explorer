import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchRepositories = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/repositories?q=${query}`,
    );
    return response?.data?.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
