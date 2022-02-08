import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        grey: {
            main: grey[200], 
            dark: grey[300]
        }
    }
});

// theme.shadows.push('0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)');

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);