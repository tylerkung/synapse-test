import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import stycom from "styled-components";

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
        </Styles>
    );
};

export default Login;
