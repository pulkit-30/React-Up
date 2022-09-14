import React from "react";
import Classes from "./Flex.module.css";
function Flex(props) {
  return (
    <div className={Classes.flex + " " + props.className}>{props.children}</div>
  );
}

export default Flex;
