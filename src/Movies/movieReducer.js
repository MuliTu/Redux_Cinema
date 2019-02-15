import {FETCH_IN_CINEMA, FETCH_MOVIE_BY_ID, FETCH_MOVIE_CREDIT, FETCH_SIMILAR} from "./types";
import * as getters from './selectors'

const init = {};

export default function (state = init, action) {
    switch (action.type) {

        case FETCH_IN_CINEMA:
            return {...state, inTheatre: action.payload};

        case FETCH_MOVIE_BY_ID:
            console.log('action',action.payload);
            return {...state, currentMovie: action.payload};

        case FETCH_MOVIE_CREDIT:
            console.log('FETCH_MOVIE_CREDIT',action.payload);
            return {...state, credits:action.payload};

        case FETCH_SIMILAR:
            console.log('FETCH_SIMILAR',action.payload);
            return {...state, similar:action.payload};


        default:
            return state

    }
}

export const getOnCinema = (state) => {return getters.getOnCinema(state)};

export const getMovieByID = (state) => {return getters.getMovieByID(state)};

export const getMovieCredits = (state) => {return getters.getMovieCredits(state)};
export const getSimilarMovies = (state) => {return getters.getSimilarMovies(state)};

