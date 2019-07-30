import users from "./users";
import oauth from "./oauth";
import bank from "./bank";

const SynapseAPI = {
    ...users,
    ...oauth,
    ...bank
};

export default SynapseAPI;
