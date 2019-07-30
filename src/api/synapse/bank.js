import { synapseProxy, getSynapseHeader } from "./api-settings";

export default {
    linkBank: async (userId, bankInfo, oauthKey) => {
        // console.log(getSynapseHeader(oauthKey))
        console.log(userId);
        const response = await fetch(`${synapseProxy}/users/${userId}/nodes`, {
            method: "POST",
            headers: getSynapseHeader(oauthKey),
            body: JSON.stringify({
                type: 'ACH-US',
                info: bankInfo
            })
        });

        return response.json();
    }
}
