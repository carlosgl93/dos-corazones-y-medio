import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat',
    },
  },
  palette: {
    paper: {
      main: '#E0F2F1',
    },
    primary: {
      main: '#26A69A',
      text: '#2B4162',
      title: '#C49799',
      contrastText: '#FFB140',
    },
    secondary: {
      main: '#3C909D',
    },
    accent: {
      main: '#80CBC4',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#C49799',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorDefault: '#E6C647',
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        contained: true,
      },
    },
    MuiIcon: {
      styleOverrides: {
        colorPrimary: '#E6C647',
        root: {
          color: '#E6C647',
        },
      },
    },
  },
});

export default theme;
