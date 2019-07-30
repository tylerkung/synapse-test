import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

// import NotFoundTab from "./components/tabs/NotFoundTab";
import RegisterTab from "./components/tabs/RegisterTab";
import LoginTab from "./components/tabs/LoginTab";
import HomeTab from "./components/tabs/HomeTab";
import BankTab from "./components/tabs/BankTab";

import { ThemeProvider } from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000"
        }
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <AppBar className="App-header">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Synapse
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{marginTop: '100px'}}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomeTab} />
                            <Route exact path="/login" component={LoginTab} />
                            <Route exact path="/register" component={RegisterTab} />
                            <Route exact path="/bank" component={BankTab} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
