import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
    useNextVariants: true,
    color: '#000',
    body1: {
      fontSize: '1.25rem'
    },
    body2: {
      fontSize: '1rem'
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#0aa3c2'
    },
    secondary: {
      main: '#1976d2',
    },
    success: {
      main: '#00B294',
    },
    background: {
      default: '#fff'
    },
    error: {
      main: '#E81123'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: '#fff',
    text: {
      primary: '#4e4f41',
      secondary: '#333',
    },
  },
  overrides: {
    MuiContainer: {
      maxWidthLg: {
        '@media (min-width: 1280px)': {
          padding: '0 47px'
        }
      }
    },
    MuiInput: {
      input: {
        "&:placeholder": {
          color: "red!important",
          fontStyle: 'italic',
        },
        color: "white",
      }
    }
  }
});
