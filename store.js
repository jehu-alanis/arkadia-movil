import { createStore, combineReducers } from 'redux';
import product from './redux/reducers/Products';
import user from './redux/reducers/UserDates';

const reducer = combineReducers({
    product,
    user,
   
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;