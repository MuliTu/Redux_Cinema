import {FETCH_ON_AIR} from "./types";
import * as getters from './selectors'

const init = {};

export default function (state = init, action) {
    switch (action.type) {

        case FETCH_ON_AIR:
            return {...state, onAir: action.payload};

        default:
            return state

    }
}

export const getOnAir = (state) => {return getters.getOnAir(state)};
