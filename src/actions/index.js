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

export const oauth = (oauthCredentials) => {
    return {
        type: 'OAUTH',
        payload: oauthCredentials
    }
}

export const linkBank = (bank) => {
    return {
        type: 'LINK_BANK',
        payload: bank
    }
}
