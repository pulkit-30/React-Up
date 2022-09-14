import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Profile.module.css";
function UserNavigation() {
  const Context = useContext(AuthContext);
  return (
    <Flex className={Classes.Nav}>
      <NavLink
        activeClassName={Classes.active_nav_link}
        className="link"
        to={`/Profile/${Context.User._id}`}
        exact
      >
        Your Products
      </NavLink>
      <NavLink
        activeClassName={Classes.active_nav_link}
        className="link"
        to={`/Profile/${Context.User._id}/Update`}
      >
        Update Your Profile
      </NavLink>
      <NavLink
        activeClassName={Classes.active_nav_link}
        className="link"
        to={`/Profile/${Context.User._id}/Order`}
      >
        Your Orders
      </NavLink>
    </Flex>
  );
}

export default UserNavigation;
