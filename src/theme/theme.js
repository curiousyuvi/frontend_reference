import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
   palette: {
      primary: {
         main: '#ffd05b',
         dark: '#4D4D4D',
         light: '#F3F3F3',
         error: '#E21F30',
      },
      secondary: {
         main: '#666f73',
         light: '#D0D7D9',
         green: '#3fb500',
         lightYellow: 'rgb(255 249 234)',
      },
   },

   typography: {
      body1: {
         color: 'rgba(0,0,0,0.67)',
      },
      fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
   },

   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'xl'
         }
      },
      MuiButton: {
         styleOverrides: {
            root: {
               // root is the name of a slot in the component
               // borderRadius: '0px',
            },
         },
         defaultProps: {
            // customize the default props for this component
            // disableRipple: true,
         },
      },
      MuiMenu: {
         styleOverrides: {
            paper: {
               maxHeight: '300px !important', // this is for reducing the height of the select menu dropdown
            },
         },
      },
      MuiFormHelperText: {
         styleOverrides: {
            root: {
               color: '#E21F30',
               marginTop: 0,
            },
            // change the color when error state is true
         },
      },
   },
});

theme = responsiveFontSizes(theme);
// adding a box shadow the the theme shadows
theme.shadows.push(
   'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
);
theme.shadows.push('0px 2px 24px rgba(22, 60, 158, 0.2)');

export { theme };
