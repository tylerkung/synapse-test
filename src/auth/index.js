import { getUserFromLocal } from "../api/fake-user-database";
import SynapseAPI from "../api/synapse";

export const Auth = {
    login: async (email, password) => {
        try {
            const existingUser = getUserFromLocal(email, password);

            return SynapseAPI.viewUser(existingUser.userId);
        } catch (error) {
            throw error;
        }
    }
};
