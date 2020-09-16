import {store} from '../index';
import config from '../config';
import {
    RESET_FILTER,
    SELECT_FILTER,
    SELECT_GENDER,
    SELECT_CATEGORY,
    TRIGGER_GET_ITEMS,
    REQUEST_ITEMS,
    REQUEST_ITEMS_SUCCESS,
    REQUEST_ITEMS_FAILIURE
} from './actionTypes';
import axios from 'axios';

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
    return {
        type: SELECT_CATEGORY,
        category: category
    }
}

export const triggerGetItems = (bol) => {
    return {type: TRIGGER_GET_ITEMS, bol: bol};
}

const requestItems = () => {
    return {type: REQUEST_ITEMS};
}

const requestItemsSuccess = (data) => {
    return {type: REQUEST_ITEMS_SUCCESS, data: data};
}

const requestItemsFailiure = () => {
    return {type: REQUEST_ITEMS_FAILIURE};
}

export const getItems = () => {
    return dispatch => {
        dispatch(requestItems());
        axios.post(config.url + '/items', {gender:store.getState().filter.gender, category:store.getState().filter.category, q:store.getState().search.q}).then(res => {
            dispatch(requestItemsSuccess(res.data));
        }).catch(err => dispatch(requestItemsFailiure()));
    }
}