import {
    RESET_FILTER,
    SELECT_FILTER,
    SELECT_GENDER,
    SELECT_CATEGORY
} from '../actions/actionTypes';

const initialState = {
    filter: '-',
    gender: 'all',
    category: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case RESET_FILTER:
            return {
                ...state,
                filter: '-',
                gender: 'all',
                category: ''
            }
        case SELECT_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        case SELECT_GENDER:
            return {
                ...state,
                gender: action.gender
            }
        case SELECT_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        default: return state;
    }
}

export default reducer;