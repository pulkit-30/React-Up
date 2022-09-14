import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
const DefaultState = {
  isUser: localStorage.getItem("isUser") || false,
  User: JSON.parse(localStorage.getItem("User")) || null,
  ErrorMessage: "",
};
const DispatchActions = (state, action) => {
  if (action.type === "Auth") {
    localStorage.clear();
    localStorage.setItem("isUser", true);
    localStorage.setItem("User", JSON.stringify(action.User));
    localStorage.setItem("UserCart", JSON.stringify(action.User.UserCart));
    return {
      isUser: true,
      User: action.User,
      isError: false,
      ErrorMessage: "",
    };
  }

  if (action.type === "LogOut") {
    localStorage.clear();
    return {
      isUser: false,
      User: null,
      isError: false,
      ErrorMessage: "",
    };
  }
  if (action.type === "Error") {
    return {
      isUser: state.isUser,
      User: state.User,
      isError: true,
      ErrorMessage: action.Message,
    };
  }

  return DefaultState;
};
function AuthProvider(props) {
  const [state, dispatch] = useReducer(DispatchActions, DefaultState);

  const Auth = (User) => {
    dispatch({
      type: "Auth",
      User: User,
    });
  };

  const LogOut = (User) => {
    dispatch({
      type: "LogOut",
    });
  };
  const Error = (message) => {
    dispatch({
      type: "Error",
      Message: message,
    });
  };
  const newAuthContext = {
    isUser: state.isUser,
    User: state.User,
    isError: state.isError,
    ErrorMessage: state.ErrorMessage,
    Auth: Auth,
    LogOut: LogOut,
    Error: Error,
  };
  return (
    <AuthContext.Provider value={newAuthContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
