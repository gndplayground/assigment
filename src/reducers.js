import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const productDetail = (state = {}, action) => {

    switch (action.type) {

        case 'PRODUCT_DETAIL':

            return Object.assign({}, state, action.payload);

        default:
            return state
    }
};

const reducers = combineReducers({
    productDetail,
    routing: routerReducer
});


export default reducers;