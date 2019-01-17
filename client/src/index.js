import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-bootstrap";
import "./i18n";
import { Provider } from "react-redux";
import store from "./store";

import * as serviceWorker from "./serviceWorker";
// import { initMiddleware, } from "devise-axios";
// initMiddleware();

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
