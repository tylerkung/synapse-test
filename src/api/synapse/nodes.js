import { synapseProxy, getSynapseHeader } from "./api-settings";

export default {
    getUserNodes: async (userId, oauth) => {
        const response = await fetch(`${synapseProxy}/users/${userId}/nodes`, {
            method: "GET",
            headers: getSynapseHeader(oauth)
        });

        const node = await response.json();
        if (node.error){
            throw new Error(node.error.en);
        }

        return node;
    }
}
