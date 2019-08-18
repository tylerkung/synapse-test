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
    if (data) {
        const user = JSON.parse(data);
        if (user.password === password) {
            return user;
        }
        throw new Error("Incorrect Password");
    }
    throw new Error("User not found");
};

export const getCurrentUser = () => {
    return localStorage['currentUser'];
}

export const getCurrentUserId = () => {
    return localStorage['currentUserId'];
}

export const getCurrentUserRefreshToken = () => {
    return localStorage['currentUserRefreshToken'];
}

export const storeCurrentOauth = (oauthKey) => {
    localStorage['currentOauthKey'] = oauthKey;
}

export const storeUser = (email, password, userId) => {
    localStorage[getUserLocalStorageKey(email)] = JSON.stringify({
        email,
        password,
        userId
    });
};

export const allUsers = [
    {
    "_id": "5d574154d83c197db51c6a13",
    "_links": {
        "self": {
            "href": "https://uat-api.synapsefi.com/v3.1/users/5d574154d83c197db51c6a13"
        }
    },
    "client": {
        "id": "5d35ff212e64586a9db1949a",
        "name": "Tyler Kung"
    },
    "doc_status": {
        "physical_doc": "MISSING|INVALID",
        "virtual_doc": "MISSING|INVALID"
    },
    "documents": [],
    "emails": [],
    "extra": {
        "cip_tag": 1,
        "date_joined": 1565999444312,
        "extra_security": false,
        "is_business": false,
        "is_trusted": false,
        "last_updated": 1565999444312,
        "public_note": null,
        "supp_id": null
    },
    "is_hidden": false,
    "legal_names": ["Chris Kung"],
    "logins": [{
        "email": "chriskung@gmail.com",
        "scope": "READ_AND_WRITE"
    }],
    "permission": "UNVERIFIED",
    "phone_numbers": ["(415) 388-1111"],
    "photos": [],
    "refresh_token": "refresh_4fTR8yE6skSj5YwAQeqBd1CWgHOGPtUhmpxcvN7l"
}, {
    "_id": "5d5741f08bce5041e4cd12f9",
    "_links": {
        "self": {
            "href": "https://uat-api.synapsefi.com/v3.1/users/5d5741f08bce5041e4cd12f9"
        }
    },
    "client": {
        "id": "5d35ff212e64586a9db1949a",
        "name": "Tyler Kung"
    },
    "doc_status": {
        "physical_doc": "MISSING|INVALID",
        "virtual_doc": "MISSING|INVALID"
    },
    "documents": [],
    "emails": [],
    "extra": {
        "cip_tag": 1,
        "date_joined": 1565999600471,
        "extra_security": false,
        "is_business": false,
        "is_trusted": false,
        "last_updated": 1565999600471,
        "public_note": null,
        "supp_id": null
    },
    "is_hidden": false,
    "legal_names": ["Matthew Koma"],
    "logins": [{
        "email": "matthewkoma@gmail.com",
        "scope": "READ_AND_WRITE"
    }],
    "permission": "UNVERIFIED",
    "phone_numbers": ["(415) 111-1111"],
    "photos": [],
    "refresh_token": "refresh_pVJ6EhovNw453OSKWbTIHFm9xC2gjABiqreucs1y"
}, {
    "_id": "5d5833d0a63ec287c6160650",
    "_links": {
        "self": {
            "href": "https://uat-api.synapsefi.com/v3.1/users/5d5833d0a63ec287c6160650"
        }
    },
    "client": {
        "id": "5d35ff212e64586a9db1949a",
        "name": "Tyler Kung"
    },
    "doc_status": {
        "physical_doc": "MISSING|INVALID",
        "virtual_doc": "MISSING|INVALID"
    },
    "documents": [],
    "emails": [],
    "extra": {
        "cip_tag": 1,
        "date_joined": 1566061519831,
        "extra_security": false,
        "is_business": false,
        "is_trusted": false,
        "last_updated": 1566061519831,
        "public_note": null,
        "supp_id": null
    },
    "is_hidden": false,
    "legal_names": ["Mary Smith"],
    "logins": [{
        "email": "marysmith@gmail.com",
        "scope": "READ_AND_WRITE"
    }],
    "permission": "UNVERIFIED",
    "phone_numbers": ["(415) 385-5555"],
    "photos": [],
    "refresh_token": "refresh_nvtLwBx20hiZHyGRYj6zrdUFXuqN9QoV7M10eIab"
}, {
    "_id": "5d583484472e254a1630d9e6",
    "_links": {
        "self": {
            "href": "https://uat-api.synapsefi.com/v3.1/users/5d583484472e254a1630d9e6"
        }
    },
    "client": {
        "id": "5d35ff212e64586a9db1949a",
        "name": "Tyler Kung"
    },
    "doc_status": {
        "physical_doc": "MISSING|INVALID",
        "virtual_doc": "MISSING|INVALID"
    },
    "documents": [],
    "emails": [],
    "extra": {
        "cip_tag": 1,
        "date_joined": 1566061700207,
        "extra_security": false,
        "is_business": false,
        "is_trusted": false,
        "last_updated": 1566061700207,
        "public_note": null,
        "supp_id": null
    },
    "is_hidden": false,
    "legal_names": ["Henry Jones"],
    "logins": [{
        "email": "henryjones@gmail.com",
        "scope": "READ_AND_WRITE"
    }],
    "permission": "UNVERIFIED",
    "phone_numbers": ["(111) 212-2331"],
    "photos": [],
    "refresh_token": "refresh_5kVq6Hcg9d4XIUEDwlKha1pN7eBP8FzotTOQsnZ3"
}, {
    "_id": "5d583545472e254a1630dcb0",
    "_links": {
        "self": {
            "href": "https://uat-api.synapsefi.com/v3.1/users/5d583545472e254a1630dcb0"
        }
    },
    "client": {
        "id": "5d35ff212e64586a9db1949a",
        "name": "Tyler Kung"
    },
    "doc_status": {
        "physical_doc": "MISSING|INVALID",
        "virtual_doc": "MISSING|INVALID"
    },
    "documents": [],
    "emails": [],
    "extra": {
        "cip_tag": 1,
        "date_joined": 1566061893004,
        "extra_security": false,
        "is_business": false,
        "is_trusted": false,
        "last_updated": 1566061893004,
        "public_note": null,
        "supp_id": null
    },
    "is_hidden": false,
    "legal_names": ["Gabriel Lin"],
    "logins": [{
        "email": "gabriellin@gmail.com",
        "scope": "READ_AND_WRITE"
    }],
    "permission": "UNVERIFIED",
    "phone_numbers": ["(112) 312-3231"],
    "photos": [],
    "refresh_token": "refresh_Brv8QVKGetDYwxmTb7kUNig5l09JSEfq0dXnhzcj"
}
]
