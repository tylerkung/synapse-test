import React, { useState } from "react";
import Register from "./Register";
import SynapseAPI from "../../../api/synapse";

const RegisterTab = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const join = async data => {
        try {
            setLoading(true);
            const user = await SynapseAPI.createUser(data);
            console.log(user);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return <Register onClickJoin={join} loading={loading} error={error} />;
};

export default RegisterTab;
