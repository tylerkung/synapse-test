// for the purpose of this front-end challenge, I'm storing the credentials locally

export const getUserLocalStorageKey = email => {
    return `synapse-user-${email}`;
};

export const userExists = email => {
    const user = localStorage[getUserLocalStorageKey(email)];

    if (user) {
        return true;
    }
    return false;
};

export const getUserFromLocal = (email, password) => {
    const data = localStorage[getUserLocalStorageKey(email)];
    console.log(data);
    if (data) {
        const user = JSON.parse(data);
        if (user.password === password) {
            return user;
        }
        throw new Error("Incorrect Password");
    }
    throw new Error("User not found");
};

export const storeUser = (email, password, userId) => {
    localStorage[getUserLocalStorageKey(email)] = JSON.stringify({
        email,
        password,
        userId
    });
};
