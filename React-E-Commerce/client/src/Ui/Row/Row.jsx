import React from "react";
import Flex from "../Flex/Flex";
import Classes from "./Row.module.css";
function Row(props) {
  return (
    <React.Fragment>
      <h3 className={Classes.Head}>Sample Collection</h3>
      <Flex className={Classes.Row}>{props.children}</Flex>
    </React.Fragment>
  );
}

export default Row;
