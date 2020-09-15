import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/actionTypes';

const initialState = {
    modal: true,
    msg: '',
    item: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modal: true,
                msg: action.msg,
                item: action.item
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: false,
                item: null
            }
        default: return state;
    }
}

export default reducer;