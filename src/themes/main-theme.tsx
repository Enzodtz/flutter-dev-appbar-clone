import { createMuiTheme } from "@material-ui/core/styles";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#3489FD",
    },
    text: {
      primary: "#757575",
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: "#757575",
    },
  },
});

export default mainTheme;
