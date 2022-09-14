import React from "react";
const ErrorContext = React.createContext({
  isError: false,
  ErrorMessage: "",
  Error: (message) => {},
  Remove: () => {},
});
export default ErrorContext;
