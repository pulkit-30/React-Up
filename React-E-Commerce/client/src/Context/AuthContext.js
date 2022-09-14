import React from "react";
const AuthContext = React.createContext({
  isUser: false,
  User: null,
  isError: false,
  ErrorMessage: "",
  Auth: (User) => {},
  LogOut: () => {},
  Error: (Message) => {},
});
export default AuthContext;
