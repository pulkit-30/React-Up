import React, { useContext, useEffect, useState } from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Auth.module.css";
import Logo from "../../Assets/logo_black.png";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import useApi from "../../Hooks/useApi";
import Loader from "../Loader/Loader";
import AuthContext from "../../Context/AuthContext";
function SignUp() {
  const Context = useContext(AuthContext);
  useEffect(() => {
    Context.Error("");
  }, []);
  const { Loading, Auth } = useApi();
  const [FirstName, updateFirstName] = useState("");
  const [LastName, updateLastName] = useState("");
  const [Email, updateEmail] = useState("");
  const [Password, updatePassword] = useState("");
  const [ConfirmPassword, updateConfirmPassword] = useState("");
  const HandelFirstName = (event) => {
    updateFirstName(event.target.value);
  };
  const HandelLastName = (event) => {
    updateLastName(event.target.value);
  };
  const HandelEmail = (event) => {
    updateEmail(event.target.value);
  };
  const HandelPassword = (event) => {
    updatePassword(event.target.value);
  };
  const HandelConfirmPassword = (event) => {
    updateConfirmPassword(event.target.value);
  };
  const HandelSubmit = (event) => {
    event.preventDefault();
    if (ConfirmPassword === Password) {
      const data = {
        FirstName,
        LastName,
        Email,
        Password,
      };
      Auth("Auth/Register", data);
    } else {
      alert("Password doesn't matched");
    }
  };
  return (
    <Flex className={Classes.Auth__Form}>
      <div className={Classes.Image_box}>
        <img src={Logo} alt="Logo" className={Classes.Image} />
      </div>
      <form className={Classes.Form} onSubmit={HandelSubmit}>
        <input
          type="text"
          className={Classes.Input}
          placeholder="First Name"
          required={true}
          value={FirstName}
          onChange={HandelFirstName}
          minLength={2}
          maxLength={25}
        />
        <input
          type="text"
          className={Classes.Input}
          placeholder="Last Name"
          required={true}
          value={LastName}
          onChange={HandelLastName}
          minLength={2}
          maxLength={25}
        />
        <input
          type="email"
          className={Classes.Input}
          placeholder="Email"
          required={true}
          value={Email}
          onChange={HandelEmail}
          minLength={4}
        />
        <input
          type="password"
          className={Classes.Input}
          placeholder="Password"
          required={true}
          value={Password}
          onChange={HandelPassword}
          minLength={8}
        />
        <input
          type="password"
          className={Classes.Input}
          placeholder="Confirm Password"
          required={true}
          value={ConfirmPassword}
          onChange={HandelConfirmPassword}
          minLength={8}
        />
        {Context.isError && <div className="error">{Context.ErrorMessage}</div>}
        {Loading && (
          <Flex>
            <Loader />
          </Flex>
        )}
        {!Loading && (
          <Button
            variant="contained"
            color="secondary"
            className={Classes.btn}
            type="submit"
          >
            Sign Up &nbsp;{<VpnKeyIcon />}
          </Button>
        )}
      </form>
    </Flex>
  );
}

export default SignUp;
