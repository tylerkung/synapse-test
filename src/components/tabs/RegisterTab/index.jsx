import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Register from "./Register";
import SynapseAPI from "../../../api/synapse";

const RegisterTab = ({ history }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const join = async data => {
        try {
            setLoading(true);
            const user = await SynapseAPI.createUser(data);
            console.log(user);

            //set login user state with credentials
            //need `user-id` to get
            //  oauth
            //  refresh_token
            //
            //need to set state to logged in
            history.push("/");
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return <Register onClickJoin={join} loading={loading} error={error} />;
};

export default withRouter(RegisterTab);
