import axios from 'axios'
import {FETCH_IN_CINEMA, FETCH_MOVIE_BY_ID, FETCH_MOVIE_CREDIT, FETCH_SIMILAR} from "./types";
import {GET_MOVIE_BY_ID, GET_MOVIE_CREDIT, GET_MOVIE_IN_THEITHER, GET_SIMILAR} from "../api/movieApi";

export const fetchMovies = () => dispatch => {
    axios.get(GET_MOVIE_IN_THEITHER)
        .then(({data}) => dispatch({
            type: FETCH_IN_CINEMA,
            payload: data.results
        }))

};

export const fetchMovieById = (id) => dispatch => {
    const types = [FETCH_MOVIE_BY_ID, FETCH_MOVIE_CREDIT, FETCH_SIMILAR];
    return Promise.all([
        axios.get(GET_MOVIE_BY_ID(id)),
        axios.get(GET_MOVIE_CREDIT(id)),
        axios.get(GET_SIMILAR(id))
    ]).then(j => j.map(({data}, index) =>
        dispatch({
            type: types[index],
            payload: data
        })
    ));
};