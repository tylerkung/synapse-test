import {
    storeUser,
    userExists
} from "../fake-user-database";
import { synapseProxy, getSynapseHeader } from "./api-settings";

export default {
    createUser: async ({ firstName, lastName, email, password, phone }) => {
        if (userExists(email)) {
            throw new Error("User already exists");
        }

        const response = await fetch(`${synapseProxy}/users`, {
            method: "POST",
            headers: getSynapseHeader(),
            body: JSON.stringify({
                logins: [{ email, password }],
                phone_numbers: [phone],
                legal_names: [`${firstName} ${lastName}`]
            })
        });

        console.log(response);

        const user = await response.json();

        if (user.error) {
            if (user.error.en.includes("password")) {
                throw new Error("Password isn't strong enough");
            }
            throw new Error(user.error.en);
        }

        storeUser(email, password, user._id);

        return user;
    },

    viewUser: async userId => {
        const response = await fetch(`${synapseProxy}/users/${userId}`, {
            method: "GET",
            headers: getSynapseHeader()
        });
        const user = await response.json();

        if (user.error) {
            if (user.error.en.includes("password")) {
                throw new Error("Password isn't strong enough");
            }
            throw new Error(user.error.en);
        }

        return user;
    }
};
