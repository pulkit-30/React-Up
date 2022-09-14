import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Profile.module.css";
import useApi from "../../Hooks/useApi";
import AuthContext from "../../Context/AuthContext";
function Danger() {
  const { DeleteData } = useApi();
  const Context = useContext(AuthContext);
  return (
    <Flex className={Classes.Danger_Box}>
      <Flex>
        Permanently Delete Your Account &nbsp;
        <Button
          className={Classes.Delete_btn}
          onClick={() => {
            DeleteData(`User/${Context.User._id}`);
            localStorage.clear();
            window.location.reload();
          }}
        >
          Delete
        </Button>
      </Flex>
    </Flex>
  );
}

export default Danger;
