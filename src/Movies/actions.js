import axios from 'axios'
import {FETCH_IN_CINEMA, FETCH_MOVIE_BY_ID} from "./types";
import {GET_MOVIE_BY_ID, GET_MOVIE_IN_THEITHER} from "../api/movieApi";

export const fetchMovies = () => dispatch => {
    axios.get(GET_MOVIE_IN_THEITHER)
        .then(({data}) => dispatch({
            type: FETCH_IN_CINEMA,
            payload: data.results
        }))

};

export const fetchMovieById = (id) => dispatch => {
    axios.get(GET_MOVIE_BY_ID(id))
        .then(({data}) => dispatch({
                type: FETCH_MOVIE_BY_ID,
                payload: data
            })
        )
};