import axios from 'axios'
import {SEARCH_RESULT} from "./types";
const url = 'https://api.themoviedb.org/3/search/company?api_key=3cfdbe65299de5ccb7f0aee807a92816'


export const fetchQuery = (query) => dispatch =>{
    const string = `${url}&query=${query.replace(' ','%20').toLowerCase()}&page=1`
    axios.get(string)
        .then(({data}) =>
            dispatch({
                type:SEARCH_RESULT,
                payload:data.results
            }))
}