import {createTheme} from '@mui/material';

// Material Theme created from Open University brand colors
const theme = createTheme({
    palette: {
        primary: {
            light: '#bdbece',
            main: '#24265c',
            dark: '#161741',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f5bedb',
            main: '#dc2587',
            dark: '#ce166a',
            contrastText: '#fff',
        },
    },
});

export default theme;
