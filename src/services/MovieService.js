import axios from 'axios';

const API_KEY = '61b93257091c63f99ac3b8eca0c97863'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'en-US', 
        page: 1, 
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};
