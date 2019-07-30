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

    else if (action.type === 'LINK_BANK'){
        const returnUser = user;
        const bankFunc = async () => {
            const bankResponse = await SynapseAPI.linkBank(action.payload.id,
                {
                    username: action.payload.username,
                    password: action.payload.password,
                    bank_name: 'fake',
                    nickname: 'Fake Account',
                    account_num: '1232225674134',
                    routing_num: '051000017',
                    type: 'PERSONAL',
                    class: 'CHECKING'
                },
                action.payload.oauth_key);
            returnUser.bank = bankResponse.nodes;
            console.log(bankResponse);
        }
        bankFunc();
        // console.log(returnUser);
        return returnUser;
    }

    else if (action.type === 'LOGOUT') {
        return null;
    }

    return user;
}

export default combineReducers({
    loggedIn: loggedInReducer,
    currentUser: userReducer,
})
