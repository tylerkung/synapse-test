// Actions
export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const viewCurrentUser = () => {
    return {
        type: 'VIEW_CURRENT_USER'
    }
}
