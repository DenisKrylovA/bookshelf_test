import { applyMiddleware, combineReducers, createStore } from 'redux';
import bookshelfReducer from './bookshelf_reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    bookshelf: bookshelfReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;