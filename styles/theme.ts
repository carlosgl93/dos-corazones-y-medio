import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
    },
  },

  palette: {
    primary: {
      main: "#E6C647",
    },
    secondary: {
      main: "#3C909D",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: "#E6C647",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        contained: true,
      },
    },
  },
});

export default theme;
