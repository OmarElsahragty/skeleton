import { createTheme } from "@material-ui/core/styles";

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#f98512",
    },
    secondary: {
      main: "#c4061d",
    },
    info: {
      main: "#19d4c6",
    },
    warning: {
      main: "#ffaf00",
    },
    success: {
      main: "#21aa41",
      dark: "#4f9668",
      light: "#09ce7d",
    },
    error: {
      main: "#cb2127",
      dark: "#b01f27",
    },
  },
});
export default DefaultTheme;
