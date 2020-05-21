import { createMuiTheme } from '@material-ui/core';

// With some help from http://paletton.com/#uid=63x0u0kXPueANTkWzKXX+okXSia

export default createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#01579b',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#00A55E'
        }
    }
});
