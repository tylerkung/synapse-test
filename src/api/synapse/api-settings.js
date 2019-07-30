const corsProxy = "https://cors-anywhere.herokuapp.com/";
const synapseHost = "https://uat-api.synapsefi.com/v3.1";

export const synapseProxy = `${corsProxy}${synapseHost}`;

export const getSynapseHeader = (oauthKey = "") => {
    return {
        "X-SP-GATEWAY": `${process.env.REACT_APP_SYNAPSEFI_CLIENT_ID}|${
            process.env.REACT_APP_SYNAPSEFI_CLIENT_SECRET
        }`,
        "X-SP-USER-IP": "127.0.0.1",
        "X-SP-USER": `${oauthKey}|d8be2225fc1aab33e666bff78ec4866b`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    };
};
