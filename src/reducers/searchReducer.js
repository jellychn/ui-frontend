import {
    OPEN_SEARCH,
    CLOSE_SEARCH,
    UPDATE_Q
} from '../actions/actionTypes';

const initialState = {
    search: false,
    q: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case OPEN_SEARCH:
            return {
                ...state,
                search: true
            }
        case CLOSE_SEARCH:
            return {
                ...state,
                search: false
            }
        case UPDATE_Q:
            return {
                ...state,
                q: action.q
            }
        default: return state;
    }
}

export default reducer;