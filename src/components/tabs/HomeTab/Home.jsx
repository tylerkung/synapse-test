import React from "react";
import Button from "@material-ui/core/Button";
import stycom from "styled-components";

const Styles = stycom.div`

    width: 100%;

    button {
        max-width: 500px;
        margin: 10px 0;
        width: 100%;
    }
`;

const Home = ({ onClickRegister, onClickLogin, onClickViewUser, onClickOauth, onClickLogOut }) => {
    return (
        <Styles>
            <Button
                onClick={onClickRegister}
                variant="contained"
                color="primary"
            >
                Register
            </Button>
            <Button onClick={onClickLogin} color="primary">
                Log In
            </Button>
            <Button onClick={onClickViewUser} color="secondary">
                View User
            </Button>
            <Button onClick={onClickOauth} color="secondary">
                Oauth User
            </Button>
            <Button onClick={onClickLogOut} color="secondary">
                Log Out
            </Button>
        </Styles>
    );
};

export default Home;
