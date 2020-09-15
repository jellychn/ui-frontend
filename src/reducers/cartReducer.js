import {
    CHECK_CART_HAS_ITEMS
} from '../actions/actionTypes';

const initialState = {
    hasItems: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case CHECK_CART_HAS_ITEMS:
            return {
                ...state,
                hasItems: action.hasItems
            }
        default: return state;
    }
}

export default reducer;