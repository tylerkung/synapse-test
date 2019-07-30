// Reducers
import { combineReducers } from 'redux';
import { Auth } from "../auth";
import SynapseAPI from '../api/synapse';

const loggedInReducer = (login = false, action) => {
    if (action.type === 'LOGIN') {
        return true;
    } if (action.type === 'LOGOUT'){
        return false;
    }
    return login;
}

const userReducer = (user = null, action) => {
    if (action.type === 'LOGIN') {
        return action.payload;
    }

    else if (action.type === 'OAUTH'){
        const returnUser = user;
        const oauthFunc = async () => {
            const oauthResponse = await Auth.oauth(action.payload.id, action.payload.refreshToken);
            returnUser.oauth = oauthResponse;
            sessionStorage['oauth_key'] = oauthResponse.oauth_key;
        }
        oauthFunc();
        return returnUser;
    }

    else if (action.type === 'LOGOUT') {
        return null;
    }

    return user;
}

const bankReducer = (bank = {}, action) => {
    if (action.type === 'LINK_BANK'){
        const returnBank = action.payload.nodes;
        return returnBank;
    }

    return bank;
}

const bankLinkedReducer = (bankLinked = false, action) => {
    if (action.type === 'LINK_BANK') {
        return true;
    }
    return bankLinked;
}

export default combineReducers({
    bank: bankReducer,
    bankLinked: bankLinkedReducer,
    loggedIn: loggedInReducer,
    currentUser: userReducer,
})
