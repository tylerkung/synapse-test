import users from "./users";
import oauth from "./oauth";
import bank from "./bank";
import nodes from "./nodes";
import transactions from "./transactions";

const SynapseAPI = {
    ...users,
    ...oauth,
    ...bank,
    ...nodes,
    ...transactions
};

export default SynapseAPI;
