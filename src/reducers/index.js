// Reducers
import { combineReducers } from 'redux';

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
        user.oauth = action.payload;
        user.oauth_key = action.payload.oauth_key;
        return user;
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

const transactionReducer = (transactions = [], action) => {
    if (action.type === 'ADD_TRANSACTION'){
        transactions.push(action.payload);
        return transactions;
    }
    if (action.type === 'GET_TRANSACTIONS') {
        return transactions;
    }
    return transactions;
}

export default combineReducers({
    bank: bankReducer,
    bankLinked: bankLinkedReducer,
    loggedIn: loggedInReducer,
    currentUser: userReducer,
    transactions: transactionReducer
})
