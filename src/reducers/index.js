import {combineReducers} from 'redux';

const loremReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
    loremReducer,
});

export default rootReducer;