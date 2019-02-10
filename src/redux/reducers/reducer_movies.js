import {FETCH_IN_CINEMA} from "../../Movies/types";

const init = [];

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_IN_CINEMA:
            return{...state, inTheatre:action.payload};

        default:
            return state

    }
}