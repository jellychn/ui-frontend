import {combineReducers} from 'redux';
import HeaderReducer from './headerReducer';
import FilterReducer from './filterReducer';
import CartReducer from './cartReducer';
import ModalReducer from './modalReducer';
import SearchReducer from './searchReducer';


export default combineReducers({
    header: HeaderReducer,
    filter: FilterReducer,
    cart: CartReducer,
    modal: ModalReducer,
    search: SearchReducer
});