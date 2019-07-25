import React from "react";
import { withRouter } from "react-router-dom";
import Home from "./Home";

const HomeTab = ({ history }) => {
    const login = () => {
        history.push("/login");
    };

    const register = () => {
        history.push("/register");
    };

    return <Home onClickLogin={login} onClickRegister={register} />;
};

export default withRouter(HomeTab);
