import {
    TOGGLE_DISPLAY_MENU,
    CLOSE_DISPLAY_MENU
} from './actionTypes';

export const toggleDisplayMenu = () => {
    return {type:TOGGLE_DISPLAY_MENU}
}

export const closeDisplayMenu = () => {
    return {type:CLOSE_DISPLAY_MENU}
}