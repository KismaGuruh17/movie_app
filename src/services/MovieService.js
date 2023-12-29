const axios = require("axios").default;
import { TMDB_BASE_URL, TMDB_API_KEY, ENDPOINTS, TMDB_IMAGE_BASE_URL, YOUTUBE_BASE_URL } from '../constans/Urls';

const TMDB_HTTP_REQUEST = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
        api_key: TMDB_API_KEY,
    },
});

const getNowPlayingMovies = () =>
    TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getUpcomingMovies = () =>
    TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

//const getAllGenres = () =>
    //TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

export { getNowPlayingMovies, getUpcomingMovies, getAllGenres, getPoster,  getMovieById };
