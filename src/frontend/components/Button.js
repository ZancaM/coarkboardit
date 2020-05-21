import React from 'react';
import { Button } from '@material-ui/core';

export default ({ secondary, children, ...otherProps }) => (
    <Button
        variant="contained"
        color={secondary ? 'secondary' : 'primary'}
        {...otherProps}
    >
        {children}
    </Button>
);
