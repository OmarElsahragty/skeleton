import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Providers from "./HOCs/ContextWrappers";
import DefaultTheme from "./theme";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={DefaultTheme}>
      <Providers.Auth>
        <Providers.Feedback>
          <Providers.API>
            <Providers.Socket>
              <App />
            </Providers.Socket>
          </Providers.API>
        </Providers.Feedback>
      </Providers.Auth>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
