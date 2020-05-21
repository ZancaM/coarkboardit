import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import PrivateRoute from './helpers/PrivateRoute';
import MuiJssProvider from './helpers/MuiJssProvider';
import theme from './theme';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar';
import PageContainer from './components/PageContainer';
import Login from './pages/Login';
import Home from './pages/Home';
import AddCorkboard from './pages/AddCorkboard';
import AddPushpin from './pages/AddPushpin';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; } 
`;

export default () => (
    <Router>
        <MuiJssProvider>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyle />
                <NavBar />
                <PageContainer>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute
                        exact
                        path="/corkboards/add"
                        component={AddCorkboard}
                    />
                    <PrivateRoute
                        exact
                        path="/pushpin/add"
                        component={AddPushpin}
                    />
                </PageContainer>
            </MuiThemeProvider>
        </MuiJssProvider>
    </Router>
);
