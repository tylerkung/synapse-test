import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import { Auth } from "../../../auth";

const LoginView = ({ history }) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async ({ email, password }) => {
        try {
            setLoading(true);
            const user = await Auth.login(email, password);

            if (user) {
                history.push("/");
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return <Login onSubmitLogin={login} loading={loading} error={error} />;
};

export default withRouter(LoginView);
