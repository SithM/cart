import { combineReducers } from 'redux';
import products from './products';
import EditProduct from './EditProducts';
const appReducers = combineReducers({
    products,
    EditProduct
});

export default appReducers;