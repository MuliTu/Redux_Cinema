import { combineReducers } from 'redux'
import MovieReducer from './reducer_movies'

export default combineReducers({
        movies: MovieReducer,
    });

