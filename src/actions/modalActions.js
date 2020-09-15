import {
    OPEN_MODAL,
    CLOSE_MODAL
} from './actionTypes';

export const openModal = (item, msg) => {
    return {
        type: OPEN_MODAL,
        item: item,
        msg: msg
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}