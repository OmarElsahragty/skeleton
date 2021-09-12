import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Providers from "./HOCs/ContextWrappers";
import reportWebVitals from "./reportWebVitals";
import DefaultTheme from "./theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
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
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
