import React, { useContext } from "react";
import { Redirect } from "react-router";
import Profile from "../Components/User/Profile";
import AuthContext from "../Context/AuthContext";

function DashBoard() {
  const Context = useContext(AuthContext);
  const User = Context.User;
  return (
    <React.Fragment>
      {!Context.isUser && <Redirect to="/Auth/signIn" />}
      {Context.isUser && <Profile User={User} />}
    </React.Fragment>
  );
}

export default DashBoard;
