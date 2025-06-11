import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E53935', 
    },
    secondary: {
      main: '#FFF3E0',
    },
    background: {
      default: '#FFF8F2', 
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Roboto', sans-serif`,
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', 
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
