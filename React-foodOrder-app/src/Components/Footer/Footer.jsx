import React from "react";
import Classes from "./Footer.module.css";
import Flex from "../Ui/Flex/Flex";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Flex className={Classes.foot}>
      <div>Made with ❤</div>
      <div>By Pulkit Gupta</div>
      <div className={Classes.cpy}>Copyright © {year}</div>
    </Flex>
  );
}

export default Footer;
