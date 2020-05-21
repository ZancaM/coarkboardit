import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import RecentCorkBoardUpdates from './RecentCorkBoardUpdates';
import MyCorkBoards from './MyCorkBoards';
import Search from './Search';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Title>Home</Title>
                <RecentCorkBoardUpdates />
                <MyCorkBoards />
                <Search />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled(Typography).attrs({ variant: 'h4' })`
    text-align: center;
    margin-bottom: 0;
`;
