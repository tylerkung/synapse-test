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

        const oauthResponse = await response.json();
        if (oauthResponse.error){
            throw new Error(oauthResponse.error.en);
        }

        return oauthResponse;
    }
}
