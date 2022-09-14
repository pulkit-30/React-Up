import React from "react";
import Classes from "./Navbar.module.css";
import Flex from "../../Ui/Flex/Flex";
function MenuItem(props) {
  return (
    <Flex className={Classes.item + " white"}>
      <div>{props.icon}</div>
      <div> {props.item}</div>
    </Flex>
  );
}

export default MenuItem;
