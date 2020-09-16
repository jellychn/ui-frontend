import {
    RESET_FILTER,
    SELECT_FILTER,
    SELECT_GENDER,
    SELECT_CATEGORY,
    TRIGGER_GET_ITEMS,
    REQUEST_ITEMS,
    REQUEST_ITEMS_SUCCESS,
    REQUEST_ITEMS_FAILIURE
} from '../actions/actionTypes';

const initialState = {
    data: [],
    filter: '-',
    gender: 'all',
    category: '',
    featched: false,
    requestItems: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case RESET_FILTER:
            return {
                ...state,
                filter: '-',
                gender: 'all',
                category: '',
                data: []
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
        case TRIGGER_GET_ITEMS:
            return {
                ...state,
                requestItems: action.bol
            }
        case REQUEST_ITEMS:
            return {
                ...state,
                featched: false
            }
        case REQUEST_ITEMS_SUCCESS:
            return {
                ...state,
                featched: true,
                data: action.data
            }
        case REQUEST_ITEMS_FAILIURE:
            return {
                ...state,
                featched: true
            }
        default: return state;
    }
}

export default reducer;