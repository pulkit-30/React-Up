import { Button } from "@material-ui/core";
import React, { useState } from "react";
import useApi from "../../Hooks/useApi";
import Flex from "../../Ui/Flex/Flex";
import Loader from "../Loader/Loader";
import Classes from "./Profile.module.css";
function UserUpdate(props) {
  const User = props.User;
  const { Update, Loading } = useApi();
  const [FirstName, updateFirstName] = useState(User.FirstName);
  const [LastName, updateLastName] = useState(User.LastName);
  const [Email, updateEmail] = useState(User.Email);
  const [Age, updateAge] = useState(User.Age);
  const [About, updateAbout] = useState(User.About);
  const [BrandName, UpdateBrandName] = useState(User.BrandName);
  const HandelFirstName = (event) => {
    updateFirstName(event.target.value);
  };
  const HandelLastName = (event) => {
    updateLastName(event.target.value);
  };
  const HandelEmail = (event) => {
    updateEmail(event.target.value);
  };

  const HandelAgeChnage = (event) => {
    updateAge(event.target.value);
  };
  const HandelAboutChange = (event) => {
    updateAbout(event.target.value);
  };
  const HandelBrandName = (event) => {
    UpdateBrandName(event.target.value);
  };
  const HandelSubmit = (event) => {
    event.preventDefault();
    Update(`User/${User._id}`, {
      UserId: User._id,
      FirstName,
      LastName,
      About,
      Email,
      Age,
      BrandName,
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={HandelSubmit}>
        <Flex className={Classes.Update}>
          <input
            type="text"
            placeholder="First Name"
            value={FirstName}
            onChange={HandelFirstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={LastName}
            onChange={HandelLastName}
          />
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={HandelEmail}
          />
          <input
            type="Number"
            placeholder="Age"
            value={Age}
            onChange={HandelAgeChnage}
          />
          <textarea
            cols="100"
            rows="10"
            type="text"
            placeholder="About"
            value={About}
            onChange={HandelAboutChange}
          />
          <input
            type="text"
            placeholder="BrandName"
            value={BrandName}
            onChange={HandelBrandName}
          />
          {Loading && <Loader />}
          {!Loading && (
            <Button variant="contained" color="secondary" type="submit">
              Update Profile
            </Button>
          )}
        </Flex>
      </form>
    </React.Fragment>
  );
}

export default UserUpdate;
