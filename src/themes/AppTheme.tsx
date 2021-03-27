import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: {
      light: "#4644c2",
      main: "#5941AF",
      dark: "#1e1d62",
      contrastText: "#fff",
    },
    secondary: {
      light: "#78f5dd",
      main: "#57e5ca",
      dark: "#4fab99",
      contrastText: "#fff",
    },
    purple: {
      50: "#E4E4F6",
      200: "#A6A4DF",
      100: "#CAC8EC",
      400: "#625FC7",
      300: "#8280D3",
      600: "#473DB2",
      500: "#625FC7",
      800: "#341C8B",
      700: "#3D2C9E",
      900: "#25006B",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
};

export default createMuiTheme(theme);
