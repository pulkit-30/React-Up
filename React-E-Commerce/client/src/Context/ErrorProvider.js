import React, { useReducer } from "react";
import ErrorContext from "./ErrorContext";
const DefaultState = {
  isError: false,
  ErrorMessage: "",
};
const ErrorHandeler = (state, action) => {
  if (action.type === "Error") {
    return {
      isError: true,
      ErrorMessage: action.message,
    };
  }
  if (action.type === "Remove") {
    return {
      isError: false,
      ErrorMessage: "",
    };
  }
  return DefaultState;
};
function ErrorProvider(props) {
  const [state, dispatch] = useReducer(ErrorHandeler, DefaultState);
  const Error = (message) => {
    dispatch({
      type: "Error",
      message: message,
    });
  };
  const Remove = () => {
    dispatch({
      type: "Remove",
    });
  };
  const value = {
    isError: state.isError,
    ErrorMessage: state.ErrorMessage,
    Error: Error,
    Remove: Remove,
  };
  return (
    <ErrorContext.Provider value={value}>
      {props.children}
    </ErrorContext.Provider>
  );
}

export default ErrorProvider;
