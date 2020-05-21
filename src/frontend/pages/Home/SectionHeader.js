import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Button from '../../components/Button';

export default styled.div.attrs({
    children: ({ text, buttonText, onButtonClick }) => (
        <>
            <Typography variant="h5">{text}</Typography>
            <Button onClick={onButtonClick}>{buttonText}</Button>
        </>
    )
})`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;
