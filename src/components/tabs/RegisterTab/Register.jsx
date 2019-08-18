import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import stycom from "styled-components";

const Styles = stycom.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: calc(100% - 30px);

    #btn-join {
        width: 300px;
        margin-top: 12px;
    }
`;

const Register = ({ onClickJoin, loading, error }) => {
    const [phone = "", setPhone] = useState();
    const [firstName = "", setFirstName] = useState();
    const [lastName = "", setLastName] = useState();
    const [email = "", setEmail] = useState();
    const [password = "", setPassword] = useState();

    return (
        <Styles>
            <TextField
                id="input-first-name"
                label="First Name"
                type="text"
                margin="dense"
                variant="filled"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                disabled={loading}
            />
            <TextField
                id="input-last-name"
                label="Last Name"
                type="text"
                margin="dense"
                variant="filled"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                disabled={loading}
            />
            <TextField
                id="input-email"
                label="Email"
                type="email"
                margin="dense"
                variant="filled"
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
                variant="filled"
                autoComplete="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading}
            />
            <TextField
                id="input-phone"
                label="Phone Number"
                type="tel"
                margin="dense"
                variant="filled"
                autoComplete="phone"
                value={phone}
                onChange={e => {
                    var n = e.target.value
                        .replace(/\D/g, "")
                        .match(/((\d{1,3}(,\d{3})+|\d+)(\.(\d\d))?)/);
                        console.log(n);
                    const number = !n[2]
                        ? n[1]
                        : "(" + n[1] + ") " + n[2] + (n[3] ? "-" + n[3] : "");
                    setPhone(number);
                }}
                disabled={loading}
            />
            {error && <div>{error}</div>}
            <Button
                id="btn-join"
                onClick={() => {
                    onClickJoin({
                        firstName,
                        lastName,
                        email,
                        password,
                        phone
                    });
                }}
                variant="contained"
                color="primary"
                disabled={!email || !password || phone.length !== 14 || loading}
            >
                {loading ? "Signing up..." : "Sign up"}
            </Button>
        </Styles>
    );
};

export default Register;
