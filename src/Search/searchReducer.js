const init = {};

export default function (state = init, action) {
    switch (action.type) {
        case 'SEARCH_RESULT':
            return {...state, results:action.payload};
default:
    return state

}
}