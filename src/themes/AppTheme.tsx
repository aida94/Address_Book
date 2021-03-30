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
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
};

export default createMuiTheme(theme);
