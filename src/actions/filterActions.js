import {
    RESET_FILTER,
    SELECT_FILTER,
    SELECT_GENDER,
    SELECT_CATEGORY
} from './actionTypes';

export const resetFilter = () => {
    return {type: RESET_FILTER}
}

export const selectFilter = (filter) => {
    return {
        type: SELECT_FILTER,
        filter: filter
    }
}

export const selectGender = (gender) => {
    return {
        type: SELECT_GENDER,
        gender: gender
    }
}

export const selectCategory = (category) => {
    console.log(category)
    return {
        type: SELECT_CATEGORY,
        category: category
    }
}