import React, { useContext } from "react";
import Classes from "./Navbar.module.css";
import MenuItem from "./MenuItem";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import HomeIcon from "@material-ui/icons/Home";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import Flex from "../../Ui/Flex/Flex";
import { Link } from "react-router-dom";
import CartContext from "../../../Store/cart-context";
import { useEffect } from "react";

function Navbar() {
  const [display, updateDisplay] = useState(false);
  const [items, updateItems] = useState(0);
  function UpdateNavMenuDisplay() {
    if (display) {
      updateDisplay(false);
    } else {
      updateDisplay(true);
    }
  }
  const Context = useContext(CartContext);
  useEffect(() => {
    return updateItems(
      Context.FoodItems.reduce((currentValue, item) => {
        return parseInt(currentValue) + parseInt(item.Ammount);
      }, 0)
    );
  }, [Context]);
  return (
    <Flex className={Classes.nav} id="nav">
      <MenuOpenIcon
        className={"absolute " + Classes.hamburger}
        onClick={UpdateNavMenuDisplay}
      />
      <Link to="/" className="white">
        <div className="font white">ReactFood App</div>
      </Link>
      <Link to="/cart" className="white">
        <ShoppingCartIcon />
        <span className={Classes.CartNumber} id="cart">
          {items}
        </span>
      </Link>
      <Flex className={Classes.nav}>
        <div
          className={Classes.NavMenu + " absolute"}
          style={{
            transform: display ? "translateX(0)" : "translateX(-100vw)",
          }}
        >
          <CloseIcon
            className={"absolute " + Classes.hamburger}
            onClick={UpdateNavMenuDisplay}
          />
          <Flex className={Classes.menu}>
            <Link to="/" onClick={UpdateNavMenuDisplay}>
              <MenuItem item="Home" icon={<HomeIcon />} />
            </Link>
            <Link to="/" onClick={UpdateNavMenuDisplay}>
              <MenuItem item="Menu" icon={<MenuBookIcon />} />
            </Link>
            <Link to="/" onClick={UpdateNavMenuDisplay}>
              <MenuItem item="About" icon={<InfoIcon />} />
            </Link>
            <Link to="/cart" onClick={UpdateNavMenuDisplay}>
              <MenuItem item="Your Taste" icon={<FastfoodIcon />} />
            </Link>
            <Link to="/" onClick={UpdateNavMenuDisplay}>
              <MenuItem item="Contact" icon={<ContactsIcon />} />
            </Link>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
}

export default Navbar;
