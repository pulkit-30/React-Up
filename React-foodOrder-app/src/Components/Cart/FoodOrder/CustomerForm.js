import { TextField } from "@material-ui/core";

import React, { useState } from "react";
import Button from "../../Ui/Button/Button";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./CustomerForm.module.css";
function CustomerForm(props) {
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setpincode] = useState("");
  const [city, setcity] = useState("");
  function handelName(event) {
    setname(event.target.value);
    console.log(name);
  }
  function handelAddress(event) {
    setAddress(event.target.value);
  }
  function handelmobile(event) {
    setMobile(event.target.value);
  }
  function handelemail(event) {
    setEmail(event.target.value);
  }
  function handelpincode(event) {
    setpincode(event.target.value);
  }
  function handelCity(event) {
    setcity(event.target.value);
  }

  function handelOrder(event) {
    event.preventDefault();
    const User = [
      {
        name: name,
        address: address,
        city: city,
        mobile: mobile,
        email: email,
        pincode: pincode,
      },
    ];
    props.Order(User);
    setAddress("");
    setname("");
    setEmail("");
    setMobile("");
    setcity("");
    setpincode("");

    props.Click();
  }
  return (
    <form onSubmit={handelOrder} className={Classes.form}>
      <h1>Order your Delicious Food</h1>
      <TextField
        id="standard-basic"
        label="Name"
        className={Classes.width}
        value={name}
        onChange={handelName}
        required
      />
      <TextField
        id="standard-basic"
        label="Address"
        className={Classes.width}
        value={address}
        onChange={handelAddress}
        required
      />
      <TextField
        id="standard-basic"
        label="City"
        className={Classes.width}
        value={city}
        onChange={handelCity}
        required
      />
      <TextField
        id="standard-basic"
        label="Pin Code"
        className={Classes.width}
        value={pincode}
        onChange={handelpincode}
        required
      />
      <TextField
        id="standard-basic"
        label="Mobile Number"
        className={Classes.width}
        value={mobile}
        onChange={handelmobile}
        required
      />
      <TextField
        id="standard-basic"
        label="Email Address"
        className={Classes.width}
        value={email}
        onChange={handelemail}
        required
      />
      <br />
      <Flex>
        <Button className="color" onClick={props.Click}>
          Cancel
        </Button>
        <Button className="brown" type="submit">
          Confirm
        </Button>
      </Flex>
    </form>
  );
}

export default CustomerForm;
