import { synapseProxy, getSynapseHeader } from "./api-settings";

export default {
    addTransaction: async ({senderId, senderNodeId, receiveNodeId, nodeType, amount, oauthKey}) => {
        const response = await fetch(`${synapseProxy}/users/${senderId}/nodes/${senderNodeId}/trans`, {
            method: "POST",
            headers: getSynapseHeader(oauthKey),
            body: JSON.stringify({
                to: {
                    type: nodeType,
                    id: receiveNodeId
                },
                amount: {
                    amount: amount,
                    currency: 'USD'
                },
                extra:{
                    ip: '192.168.0.1'
                }
            })
        });

        const transactionResponse = await response.json();
        console.log(transactionResponse)
        if (transactionResponse.error){
            throw new Error(transactionResponse.error.en);
        }

        return transactionResponse;
    }
}
