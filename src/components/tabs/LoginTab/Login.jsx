import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import stycom from "styled-components";

import loginSplash from '../../../img/login-splash.png';

const Styles = stycom.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #btn-login {
        width: 195px;
        margin-top: 12px;
    }
`;

const Login = ({ onSubmitLogin, loading, error }) => {
    const [email = "", setEmail] = useState();
    const [password = "", setPassword] = useState();

    return (
        <Styles>
            <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h1>Login</h1>
                    <form
                        onSubmit={e => {
                            e.preventDefault();

                            onSubmitLogin({
                                email,
                                password
                            });
                        }}
                    >
                        <TextField
                            id="input-email"
                            label="Email"
                            type="email"
                            margin="dense"
                            variant="outlined"
                            autoComplete="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        <TextField
                            id="input-password"
                            label="Password"
                            type="password"
                            margin="dense"
                            variant="outlined"
                            autoComplete="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            disabled={loading}
                        />

                        {error && <div>{error}</div>}

                        <Button
                            id="btn-login"
                            variant="contained"
                            color="primary"
                            disabled={!email || !password || loading}
                            type="submit"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img alt="Login" src={loginSplash} />
                </Grid>
            </Grid>
            </Container>
        </Styles>
    );
};

export default Login;
