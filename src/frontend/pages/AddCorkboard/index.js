import React from 'react';
import styled from 'styled-components';
import {
    Typography,
    Paper,
    TextField,
    CircularProgress,
    MenuItem,
    Switch
} from '@material-ui/core';
import { Button } from '@material-ui/core/index';

export default class AddCorkboard extends React.Component {

    state = {
        loading: false,
        error: false,
        category: 'Travel',
        isPrivate: false,
        password: '',
        title: ''
    };

    categories = [
        'Travel',
        'Architecture',
        'Education'
    ];

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSwitchChange = name => event => {
        this.setState({
            [name]: event.target.checked,
        });
    };

    render() {
        return (
            <Container>
                <Title>Add CorkBoard</Title>
                <AddCBForm>
                    <form onSubmit={this.addCorkboard}>
                        <TextField
                            required
                            autoFocus
                            name="title"
                            label="Title"
                            fullWidth
                        />
                        <TextField
                            select
                            required
                            label="Category"
                            value={this.state.category}
                            onChange={this.handleChange('category')}
                            fullWidth
                        >
                            {this.categories.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Switch
                            checked={this.state.isPrivate}
                            onChange={this.handleSwitchChange('isPrivate')}
                            value="isPrivate"
                        />
                        {this.state.isPrivate ? (
                            <TextField
                                name="password"
                                label="Password"

                            />  ) : <> </>
                        }

                        {this.state.loading ? (
                            <CircularProgress />
                        ) : (
                            <AddButton>Add</AddButton>
                        )}
                    </form>
                </AddCBForm>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled(Typography).attrs({ variant: 'h4' })`
    text-align: center;
    margin-bottom: 0;
`;

const AddCBForm = styled(Paper)`
    width: 100%;
    height: calc(210px + 1rem);
    max-width: 400px;
    padding: 1rem;

    * + * {
        margin-bottom: 1rem;
    }
`;

const AddButton = styled(Button).attrs({
    type: 'submit',
    color: 'secondary',
    variant: 'contained'
})`
    float: right;
    margin-bottom: 0;
`;