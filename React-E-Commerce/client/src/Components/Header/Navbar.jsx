import React, { useContext } from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { Button } from "@material-ui/core";

function Navbar() {
  const Context = useContext(AuthContext);
  const Public_folder = "http://localhost/images/";
  return (
    <Flex className={Classes.Navbar}>
      <Flex className={Classes.Logo}>
        <NavLink
          activeClassName={Classes.Active_Link}
          className="link"
          to="/"
          exact
        >
          REACT MART
        </NavLink>
      </Flex>
      <Flex className={Classes.SearchBox}>
        <input type="search" placeholder="Search" />
        <i className="fas fa-search"></i>
      </Flex>
      {Context.isUser && (
        <NavLink
          to={`/Cart/${Context.User._id}`}
          activeClassName={Classes.Active_Link}
          className="link"
        >
          <Flex className={Classes.Cart}>
            <i className="fas fa-shopping-cart"></i>
          </Flex>
        </NavLink>
      )}
      <Flex className={Classes.User}>
        {Context.isUser && (
          <NavLink
            activeClassName={Classes.Active_Link}
            className={Classes.Profile + " link"}
            to={`/Profile/${Context.User._id}`}
          >
            {Context.User.ProfilePicture ? (
              <img
                src={Public_folder + Context.User.ProfilePicture}
                alt="ProfilePicture"
              />
            ) : (
              <img
                src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                alt="ProfilePicture"
              />
            )}
          </NavLink>
        )}
        {!Context.isUser && (
          <React.Fragment>
            <NavLink
              to="/Auth/signUp"
              className="link "
              activeClassName={Classes.Active_Link}
            >
              <Button variant="outlined" color="secondary">
                SignUp
              </Button>
            </NavLink>
            <NavLink
              to="/Auth/signIn"
              className="link "
              activeClassName={Classes.Active_Link}
            >
              <Button variant="contained" color="secondary">
                SignIn
              </Button>
            </NavLink>
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
