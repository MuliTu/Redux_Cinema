import {FETCH_IN_CINEMA, FETCH_MOVIE_BY_ID} from "./types";


const init = {};

export default function (state = init, action) {
    switch (action.type) {

        case FETCH_IN_CINEMA:
            return {...state, inTheatre: action.payload};

        case FETCH_MOVIE_BY_ID:
            return {...state, currentMovie: action.payload};

        default:
            return state

    }
}