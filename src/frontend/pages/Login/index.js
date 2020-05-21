import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    Button,
    Typography,
    Paper,
    TextField,
    CircularProgress
} from '@material-ui/core';
import styled from 'styled-components';
import { isLoggedIn, logIn } from '../../auth';

export default class Login extends React.Component {
    state = {
        redirect: isLoggedIn(),
        loading: false,
        error: false,
        username: '',
        pin: ''
    };

    handlePinInput = event => {
        const pin = event.target.value;
        if (/^\d*$/.test(pin) && pin.length <= 4) {
            this.setState({ pin });
        }
    };

    handleLogin = async event => {
        event.preventDefault();
        const { username, pin } = event.target;
        this.setState({ loading: true });
        try {
            await logIn(username.value, pin.value);
            this.setState({ redirect: true });
        } catch (err) {
            this.setState({ error: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        if (this.state.redirect) {
            const { from } = this.props.location.state || {
                from: { pathname: '/' }
            };
            return <Redirect to={from} />;
        }

        return (
            <Container>
                <Welcome>Welcome! Please log in.</Welcome>
                <LoginForm>
                    <form onSubmit={this.handleLogin}>
                        <TextField
                            required
                            autoFocus
                            name="username"
                            label="Username"
                            fullWidth
                        />
                        <TextField
                            required
                            type="password"
                            name="pin"
                            label="PIN"
                            value={this.state.pin}
                            onInput={this.handlePinInput}
                            fullWidth
                        />
                        {this.state.loading ? (
                            <CircularProgress />
                        ) : (
                            <LoginButton>Log in</LoginButton>
                        )}
                    </form>
                </LoginForm>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Welcome = styled(Typography).attrs({ variant: 'h5' })`
    margin-bottom: 2rem;
`;

const LoginForm = styled(Paper)`
    width: 100%;
    height: calc(200px + 1rem);
    max-width: 400px;
    padding: 1rem;

    * + * {
        margin-bottom: 1rem;
    }
`;

const LoginButton = styled(Button).attrs({
    type: 'submit',
    color: 'secondary',
    variant: 'contained'
})`
    margin-bottom: 0;
`;
