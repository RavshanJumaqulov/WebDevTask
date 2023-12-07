import { createTheme } from "@mui/material/styles";
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
    interface Theme {
        mode: string,
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}


const theme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        primary: {
            main: '#fff'
        },
        secondary: {
            main: 'hsla(0,0%,100%,.6)'
        },
        text: {
            primary: '#fff',
            secondary: 'hsla(0,0%,100%,.6)'
        },
        
    },
    typography: {
        subtitle1: {
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: 40,
            fontWeight: 500,
            color: '#fff',
            cursor: 'default',
            letterSpacing: '-0.03em',
            lineHeight: 1.25
        },
        subtitle2: {
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: 20,
            fontWeight: 500,
            color: '#fff',
            cursor: 'pointer',
            '&:hover': {
                color: '#ffffff'
            },
        },
        body1: {
            fontSize: 16,
            fontWeight: 500,
            color: '#fff',
            cursor: 'default',
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
            color: 'hsla(0,0%,100%,.6)',
            cursor: 'default',
            textAlign: 'center'
        },
        button: {
            fontFamily: 'Ubuntu, sans-serif',
            textTransform: 'full-size-kana',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            p: '1rem 1.5rem',
            transition: '0.3s all'
        }
    },

})

export default theme