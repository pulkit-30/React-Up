import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Classes from "./Profile.module.css";
function LogOut() {
  const Context = useContext(AuthContext);
  return (
    <Button
      variant="contained"
      className={Classes.LogOut_btn}
      onClick={() => {
        Context.LogOut();
      }}
    >
      Log out
    </Button>
  );
}

export default LogOut;
