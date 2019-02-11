import { combineReducers } from 'redux'
import movieReducer from '../Movies/movieReducer'
import tvShowReducer from '../TvShow/tvShowReducer'
import searchReducer from '../Search/searchReducer'

export default combineReducers({
        movies: movieReducer,
        tvshows:tvShowReducer,
        search:searchReducer
    });

