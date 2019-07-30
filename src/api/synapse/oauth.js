import { synapseProxy, getSynapseHeader } from "./api-settings";

export default {
    oauthUser: async (userId, refreshToken) => {
        const response = await fetch(`${synapseProxy}/oauth/${userId}`, {
            method: "POST",
            headers: getSynapseHeader(),
            body: JSON.stringify({
                refresh_token: refreshToken
            })
        });

        return response.json();
    }
}
