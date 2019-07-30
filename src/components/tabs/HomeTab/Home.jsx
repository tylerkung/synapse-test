import React from "react";
import Button from "@material-ui/core/Button";
import stycom from "styled-components";
import BankInfo from '../../BankInfo';

const Styles = stycom.div`

    width: 100%;

    button {
        max-width: 500px;
        margin: 10px 0;
        width: 100%;
    }
`;

const Home = ({ onClickRegister, onClickLogin, onClickViewUser, onClickLogOut, onClickLinkBank, loggedIn, name, bankInfo }) => {
    const showLoggedInButton = () => {
        if (loggedIn) {
            return (
                <div>
                    <h1>Welcome back, {name}</h1>
                    <Button onClick={onClickLogOut} color="secondary">
                        Log Out
                    </Button>
                    
                    <Button onClick={onClickViewUser} color="secondary">
                        View User
                    </Button>
                </div>
            );
        } return (
            <div>
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
            </div>
        )
    }

    return (
        <Styles>
            {showLoggedInButton()}
            <BankInfo />
        </Styles>
    );
};

export default Home;
