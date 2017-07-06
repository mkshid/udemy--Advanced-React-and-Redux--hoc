import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';

const rootReducer = combineReducers({
    authenticated: authenticationReducer
});

export default rootReducer;
