import {
    TOGGLE_DISPLAY_MENU,
    CLOSE_DISPLAY_MENU
} from '../actions/actionTypes';

const initialState= {
    displayMenu: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_DISPLAY_MENU:
            return {
                ...state,
                displayMenu: !state.displayMenu
            }
        case CLOSE_DISPLAY_MENU:
            return {
                ...state,
                displayMenu: false
            }
        default: return state;
    }
}

export default reducer;