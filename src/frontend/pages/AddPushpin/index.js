import React from 'react';
import styled from 'styled-components';
import {
    Typography,
    Paper,
    TextField,
    CircularProgress
} from '@material-ui/core';
import { Button } from '@material-ui/core/index';

export default class AddPushpin extends React.Component {
    state = {
        loading: false,
        error: false,
        url: '',
        description: '',
        tags: ''
    };

    render() {
        return (
            <Container>
                <Title>Add Pushpin</Title>
                {this.props.corkboard ? <SubTitle>to {this.props.corkboard}</SubTitle> : <></>}
                <AddPPForm>
                    <form onSubmit={this.addPushpin}>
                        <TextField
                            required
                            autoFocus
                            name="url"
                            label="Url"
                            fullWidth
                        />
                        <TextField
                            required
                            label="Description"
                            fullWidth
                            multiline
                        />
                        <TextField
                            autoFocus
                            name="tags"
                            label="Tags"
                            fullWidth
                        />
                        {this.state.loading ? (
                            <CircularProgress />
                        ) : (
                            <AddButton>Add</AddButton>
                        )}
                    </form>
                </AddPPForm>
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
const SubTitle = styled(Typography).attrs({ variant: 'h5' })`
    text-align: center;
    margin-bottom: 0;
`;

const AddPPForm = styled(Paper)`
    width: 100%;
    height: calc(220px + 1rem);
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