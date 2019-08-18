import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

// import NotFoundTab from "./components/tabs/NotFoundTab";
import RegisterTab from "./components/tabs/RegisterTab";
import LoginTab from "./components/tabs/LoginTab";
import HomeTab from "./components/tabs/HomeTab";
import BankTab from "./components/tabs/BankTab";
import AppLogo from "./components/AppLogo";
import UserActions from "./components/UserActions";

import { ThemeProvider } from "@material-ui/styles";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from "@material-ui/core/styles";
import stycom from "styled-components";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#fff"
        },
        green: {
            main: "#083232"
        }
    }
});

const Styles = stycom.div`

`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Styles>
                <div className="App">
                    <Router>
                        <AppBar className="App-header">
                            <Toolbar>
                                <AppLogo />
                                <UserActions />
                            </Toolbar>
                        </AppBar>
                        <Container style={{marginTop: '100px'}}>
                            <Switch>
                                <Route exact path="/" component={HomeTab} />
                                <Route exact path="/login" component={LoginTab} />
                                <Route exact path="/register" component={RegisterTab} />
                                <Route exact path="/bank" component={BankTab} />
                            </Switch>
                        </Container>
                    </Router>
                </div>
            </Styles>
        </ThemeProvider>
    );
};

export default App;
