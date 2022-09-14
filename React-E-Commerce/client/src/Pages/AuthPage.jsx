import React, { useContext } from "react";
import { Redirect, useParams } from "react-router";
import SignIn from "../Components/Auth/SignIn";
import SignUp from "../Components/Auth/SignUp";
import AuthContext from "../Context/AuthContext";

function AuthPage() {
  const { Method } = useParams();
  const Context = useContext(AuthContext);

  return (
    <React.Fragment>
      {Context.isUser && <Redirect to="/" />}
      {Method === "signUp" ? <SignUp /> : <SignIn />}
    </React.Fragment>
  );
}

export default AuthPage;
