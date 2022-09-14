import React from "react";
import Flex from "../Flex/Flex";
import Classes from "./Box.module.css";
function Box(props) {
  return (
    <Flex className={Classes.Box} key={props.key}>
      {props.children}
    </Flex>
  );
}

export default Box;
