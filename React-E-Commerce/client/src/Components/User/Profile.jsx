import React from "react";
import { Route, Switch } from "react-router";
import Flex from "../../Ui/Flex/Flex";
import Danger from "./Danger";
import LogOut from "./LogOut";
import NewProductPage from "./NewProductPage";
import Classes from "./Profile.module.css";
import ProfilePicture from "./ProfilePicture";
import UserDeatils from "./UserDeatils";
import UserNavigation from "./UserNavigation";
import UserOrders from "./UserOrders";
import UserProducts from "./UserProducts";
import UserUpdate from "./UserUpdate";
function Profile(props) {
  const User = props.User;

  return (
    <Flex className={Classes.Profile_Box}>
      <LogOut />
      <Flex className={Classes.Profile_Upper}>
        <ProfilePicture />
        <UserDeatils User={User} />
      </Flex>
      <UserNavigation />
      <Switch>
        <Route path="/Profile/:id" exact>
          <UserProducts />
        </Route>
        <Route path="/Profile/:id/Update">
          <UserUpdate User={User} />
          <Danger />
        </Route>
        <Route path="/Profile/:id/Orders">
          <UserOrders />
        </Route>
        <Route path="/Profile/:id/AddProduct">
          <NewProductPage />
        </Route>
      </Switch>
    </Flex>
  );
}

export default Profile;
