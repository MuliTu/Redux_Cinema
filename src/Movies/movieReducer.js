import {FETCH_IN_CINEMA, FETCH_MOVIE_BY_ID} from "./types";
import * as getters from './selectors'

const init = {};

export default function (state = init, action) {
    switch (action.type) {

        case FETCH_IN_CINEMA:
            return {...state, inTheatre: action.payload};

        case FETCH_MOVIE_BY_ID:
            console.log('action',action.payload);
            return {...state, currentMovie: action.payload};

        default:
            return state

    }
}

export const getOnCinema = (state) => {return getters.getOnCinema(state)};

export const getMovieByID = (state) => {return getters.getMovieByID(state)};

