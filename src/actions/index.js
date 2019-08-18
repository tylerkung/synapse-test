// Actions
export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const oauth = (oauthData) => {
    return {
        type: 'OAUTH',
        payload: oauthData
    }
}

export const bank = (bank) => {
    return {
        type: 'LINK_BANK',
        payload: bank
    }
}

export const addTransaction = (transaction) => {
    return{
        type: 'ADD_TRANSACTION',
        payload: transaction
    }
}

export const transactions = () => {
    return {
        type: 'GET_TRANSACTIONS'
    }
}
