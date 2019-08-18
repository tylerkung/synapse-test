import React from "react";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import stycom from "styled-components";
import BankInfo from '../../BankInfo';
import SendTransaction from '../../SendTransaction';
import TransactionHistory from '../../TransactionHistory';
import homeSplash from '../../../img/bank-splash.png';

const Styles = stycom.div`

    width: 100%;

    button {
        max-width: 500px;
        margin: 10px 0;
        padding: 10px 30px;
    }
    .signUp{
        background-color: #083232;
        color: #fff;
        &:hover{
            background-color: #062020;
        }
    }
    .flex-center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
    }
`;

const Home = ({onClickViewUser, onClickRegister, loggedIn, name, bankInfo }) => {
    const showLoggedInButton = () => {
        if (loggedIn) {
            return (
                <div>
                    <h1>Welcome back, {name}</h1>
                    <h2>Send Money</h2>
                    <BankInfo />
                    <SendTransaction />
                    <TransactionHistory />
                </div>
            );
        } return (
            <div>
                <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <img alt="Payments made easy" src={homeSplash} />
                    </Grid>
                    <Grid item xs={12} sm={5} className="flex-center">
                        <h1 className="lg">Payments, made easy</h1>
                        <Button className="signUp" onClick={onClickRegister}>Sign Up</Button>
                    </Grid>
                </Grid>
                </Container>
            </div>
        )
    }

    return (
        <Styles>
            {showLoggedInButton()}
        </Styles>
    );
};

export default Home;
