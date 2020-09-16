import  {
    OPEN_SEARCH,
    CLOSE_SEARCH,
    UPDATE_Q
} from './actionTypes';

export const openSearch = () => {
    return {type: OPEN_SEARCH}
}

export const closeSearch = () => {
    return {type: CLOSE_SEARCH}
}

export const updateQ = (q) => {
    return {
        type: UPDATE_Q,
        q: q
    }
}
