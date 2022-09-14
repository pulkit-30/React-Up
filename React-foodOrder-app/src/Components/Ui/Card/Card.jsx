import React from "react";
import Classes from "./Card.module.css";
function Card(props) {
  return <div className={Classes.card}>{props.children}</div>;
}

export default Card;
