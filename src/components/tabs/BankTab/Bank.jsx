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

const Bank = ({ onSubmitLinkBank, loading, error }) => {
    const [username = "", setUsername] = useState();
    const [password = "", setPassword] = useState();

    return (
        <Styles>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    onSubmitLinkBank({
                        username,
                        password
                    });
                }}
            >
                <TextField
                    id="input-username"
                    label="Username"
                    type="username"
                    margin="dense"
                    variant="outlined"
                    autoComplete="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
                    id="btn-linkBank"
                    variant="contained"
                    color="primary"
                    disabled={!username || !password || loading}
                    type="submit"
                >
                    {loading ? "Linking Bank..." : "Link Bank"}
                </Button>
            </form>
        </Styles>
    );
};

export default Bank;
