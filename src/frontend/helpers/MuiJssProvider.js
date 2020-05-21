import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create as createJss } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// Make sure our custom styles are injected after MUI's. This was adapted
// from an example linked in their docs: https://codesandbox.io/s/y2vyq6132x
const muiJssInsertionPoint = 'mui-css-insertion-point';
const styleNode = document.createComment(muiJssInsertionPoint);
document.head.insertBefore(styleNode, document.head.firstChild);
const generateClassName = createGenerateClassName();
const jss = createJss(jssPreset());
jss.options.insertionPoint = muiJssInsertionPoint;

export default props => (
    <JssProvider jss={jss} generateClassName={generateClassName}>
        {props.children}
    </JssProvider>
);
