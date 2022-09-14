import React from "react";
import Classes from "./Box.module.css";
function Box(props) {
  return (
    <div className={props.className + " " + Classes.Box}>{props.children}</div>
  );
}

export default Box;
