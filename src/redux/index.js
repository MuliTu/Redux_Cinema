import { combineReducers } from 'redux'
import movieReducer,* as fromMovieReducer from '../Movies/movieReducer'
import tvShowReducer, * as fromTvShowReducer from '../TvShow/tvShowReducer'
import searchReducer from '../Search/searchReducer'

export default combineReducers({
        movies: movieReducer,
        tvshows:tvShowReducer,
        search:searchReducer
    });

export const getOnAir = (state) => fromTvShowReducer.getOnAir(state.tvshows)

export const getOnCinema = (state) => fromMovieReducer.getOnCinema(state.movies)


