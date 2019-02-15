import { combineReducers } from 'redux'
import movieReducer , * as fromMovieReducer from '../Movies/movieReducer'
import tvShowReducer, * as fromTvShowReducer from '../TvShow/tvShowReducer'
import searchReducer, * as fromSearchReducer from '../Search/searchReducer'

export default combineReducers({
        movies: movieReducer,
        tvshows:tvShowReducer,
        search:searchReducer
    });

//TV Show
export const getOnAir = (state) => fromTvShowReducer.getOnAir(state.tvshows)


// Movie
export const getOnCinema = (state) => fromMovieReducer.getOnCinema(state.movies)
export const getMovieByID = (state) => fromMovieReducer.getMovieByID(state.movies)
export const getMovieCredits = (state) => fromMovieReducer.getMovieCredits(state.movies)
export const getSimilarMovies = (state) => fromMovieReducer.getSimilarMovies(state.movies)


//Search
export const getSearchResults = (state) => fromSearchReducer.getSearchResults(state.search)




