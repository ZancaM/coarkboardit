import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export default function Logo() {
    return (
        <Container>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <CorkBoard />
                <It />
                <Tagline />
            </Link>
        </Container>
    );
}

const Container = styled.div`
    flex: 0 0 auto;
    width: 12rem;
    &&& * {
        outline: none;
    }
`;

const CorkBoard = styled(Typography).attrs({
    variant: 'h4',
    children: 'CorkBoard'
})`
    color: white;
    display: inline-block;
`;

const It = styled(Typography).attrs({ variant: 'h4', children: 'It' })`
    color: #f14500;
    display: inline-block;
`;

const Tagline = styled(Typography).attrs({
    variant: 'subtitle2',
    children: 'Explore. Share. Inspire.'
})`
    color: #f1b500;
    padding-left: 2em;
    margin-top: -0.5em;
`;
