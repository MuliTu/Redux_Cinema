import {BASE_URL,API} from './mainApi'

const path = 'movie';

export const GET_MOVIE_IN_THEITHER = `${BASE_URL}/${path}/now_playing?api_key=${API}&language=en-US&page=1`;

export const GET_MOVIE_BY_ID = (id) => `${BASE_URL}/${path}/${id}?api_key=${API}&language=en-US`;