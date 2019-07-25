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

const Home = ({ onClickRegister, onClickLogin }) => {
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
        </Styles>
    );
};

export default Home;
