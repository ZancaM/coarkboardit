import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from '../components/Logo';
import Button from './Button';
import { isLoggedIn, logOut, currentUsername } from '../auth';

class NavBar extends React.Component {
    handleLogOut = () => {
        logOut();
        this.props.history.push('/login');
    };

    render() {
        return (
            <AppBar position="static">
                <StyledToolbar>
                    <Logo />
                    {isLoggedIn() && (
                        <>
                            <LoggedInAs username={currentUsername()} />
                            <LogOutButton onClick={this.handleLogOut}>
                                Log Out
                            </LogOutButton>
                        </>
                    )}
                </StyledToolbar>
            </AppBar>
        );
    }
}

const StyledToolbar = styled(Toolbar).attrs({ disableGutters: true })`
    margin: 0 auto;
    width: 960px;
    max-width: 960px;
`;

const LoggedInAs = styled(Typography).attrs({
    variant: 'h6',
    children: ({ username }) => (
        <>
            Logged in as <span title={username}>{username}</span>
        </>
    )
})`
    color: #ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    padding: 0 1rem;
    text-align: right;

    span {
        color: white;
        font-weight: bold;
        font-size: 1.2em;
    }
`;

const LogOutButton = styled(Button).attrs({ secondary: true })`
    width: 6rem;
    flex: 0 0 auto;
`;

export default withRouter(NavBar);
