import axios from 'axios'
import {FETCH_ON_AIR_URL} from "../api/tvshowApi";
import {FETCH_ON_AIR} from "./types";

export const fetch_on_air = () => dispatch => {
    axios.get(FETCH_ON_AIR_URL).then(({data}) => {
        dispatch({
            type: FETCH_ON_AIR,
            payload: data.results
        })
    })
};