/**
 * Created by gomes on 15/12/16.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk),
);

export default configureStore;