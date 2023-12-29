const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=61b93257091c63f99ac3b8eca0c97863" ;
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500$"; // Sesuaikan dengan ukuran yang diinginkan
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const TMDB_API_KEY = "config.projectConfig.apiKey"; 

const ENDPOINTS = {
    NOW_PLAYING_MOVIES: "/movie/now_playing",
    UPCOMING_MOVIES: "/movie/upcoming",
    //GENRES: "/genre/movie/list",
  };

export { TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS, APPEND_TO_RESPONSE, YOUTUBE_BASE_URL };
