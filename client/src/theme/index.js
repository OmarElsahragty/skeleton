import { createTheme } from "@material-ui/core/styles";

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#111c4e",
    },
    secondary: {
      main: "#016671",
    },
    info: {
      main: "#19d4c6",
    },
    warning: {
      main: "#ffaf00",
    },
    success: {
      main: "#21aa41",
    },
    error: {
      main: "#cb2127",
    },
  },
});
export default DefaultTheme;
