// Reducers

import { combineReducers } from 'redux';

const userReducer = (user = null, action) => {
    if (action.type === 'LOGIN') {
        return action.payload;
    }

    return user;
}

export default combineReducers({
    currentUser: userReducer
})
