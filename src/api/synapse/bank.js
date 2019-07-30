import { synapseProxy, getSynapseHeader } from "./api-settings";

export default {
    linkBank: async (credentials) => {
        const response = await fetch(`${synapseProxy}/users/${credentials.id}/nodes`, {
            method: "POST",
            headers: getSynapseHeader(credentials.oauth_key),
            body: JSON.stringify({
                type: 'ACH-US',
                info: credentials.bankInfo
            })
        });
        return response.json();
    }
}
