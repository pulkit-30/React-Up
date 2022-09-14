import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthProvider from "./Context/AuthProvider";
import ErrorProvider from "./Context/ErrorProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutProvider from "./Context/CheckoutProvider";

ReactDOM.render(
  <ErrorProvider>
    <AuthProvider>
      <CheckoutProvider>
        <App />
      </CheckoutProvider>
    </AuthProvider>
  </ErrorProvider>,
  document.getElementById("root")
);
