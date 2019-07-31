// Reducers
import { combineReducers } from 'redux';
import { Auth } from "../auth";

const loggedInReducer = (login = false, action) => {
    if (action.type === 'LOGIN') {
        return true;
    } else if (action.type === 'LOGOUT'){
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

const bankReducer = (bank = [], action) => {
    if (action.type === 'LINK_BANK'){
        const returnBank = bank;
        Object.keys(action.payload.nodes).map(
            (keyName, keyIndex) =>
                returnBank.push(action.payload.nodes[keyName])
        );
        return returnBank;
    }
    if (action.type === 'LOGOUT'){
        return [];
    }

    return bank;
}

const bankLinkedReducer = (bankLinked = false, action) => {
    if (action.type === 'LINK_BANK') {
        return true;
    } if (action.type === 'LOGOUT'){
        return false;
    }
    return bankLinked;
}

export default combineReducers({
    bank: bankReducer,
    bankLinked: bankLinkedReducer,
    loggedIn: loggedInReducer,
    currentUser: userReducer,
})
