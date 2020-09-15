import {
    CHECK_CART_HAS_ITEMS
} from './actionTypes';

export const checkCartHasItems = () => {
    if (window.localStorage.getItem('cart') === null) {
        window.localStorage.setItem('cart', JSON.stringify([]));
    }
    let hasItems = false;
    if (JSON.parse(window.localStorage.getItem('cart')).length > 0) {
        hasItems = true;
    }

    return {
        type: CHECK_CART_HAS_ITEMS,
        hasItems: hasItems
    }
}