import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Checkout.module.css";
import Class from "../FakeStore/Store.module.css";
import Logo from "../../Assets/logo_black.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useApi from "../../Hooks/useApi";
import Loader from "../Loader/Loader";
import CheckoutContext from "../../Context/CheckoutContext";
import { Redirect, useHistory } from "react-router";
import AuthContext from "../../Context/AuthContext";
function Checkout() {
  const history = useHistory();
  const Checkout = useContext(CheckoutContext);
  const Context = useContext(AuthContext);
  const { Data, Loading, PostData } = useApi();
  const [FirstName, updateFirstName] = useState("");
  const [LastName, updateLastName] = useState("");
  const [Email, updateEmail] = useState("");
  const [Address, UpdateAddress] = useState("");
  const [City, updateCity] = useState("");
  const [PinCode, updatePinCode] = useState("");
  const [ShippingAddress, updateShippingAddress] = useState("");
  const [Mobile, updateMobile] = useState("");
  const handelFirstNameChange = (event) => {
    updateFirstName(event.target.value);
  };
  const handelLastNameChange = (event) => {
    updateLastName(event.target.value);
  };
  const handelEmailChange = (event) => {
    updateEmail(event.target.value);
  };
  const handelAddressChange = (event) => {
    UpdateAddress(event.target.value);
  };
  const handelCityChange = (event) => {
    updateCity(event.target.value);
  };
  const handelPinCodeChange = (event) => {
    updatePinCode(event.target.value);
  };
  const handelShippingAddressChange = (event) => {
    updateShippingAddress(event.target.value);
  };
  const handelMobileChange = (event) => {
    updateMobile(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const data = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Order: Checkout.Product,
      Address: Address,
      City: City,
      PinCode: PinCode,
      ShippingAddress: ShippingAddress,
      MobileNumber: Mobile,
    };
    PostData(`Checkout/${Context.User._id}`, data);
    history.push("/");
  };

  const Public_folder = "http://localhost/images/";
  return (
    <form className={Class.Form_Box} onSubmit={handelSubmit}>
      {Checkout.Product.length === 0 && <Redirect to="/" />}{" "}
      {Checkout.Product &&
        Checkout.Product.map((product) => {
          return (
            <div className={Classes.Box}>
              <Flex className={Class.Card_image}>
                {product.ProductImage ? (
                  <img src={product.ProductImage} alt="ProductImage" />
                ) : (
                  <img src={product.ImageUrl} alt="" />
                )}
                {product.image && <img src={product.image} />}
              </Flex>
              <div>
                <div>{product.ProductName}</div>
                <hr />
                <div>{product.ProductDescription}</div>
                <div>Price : Rs {product.Price}/-</div>
                <div>
                  Rating :
                  {product.Stars &&
                    Array(parseInt(product.Stars))
                      .fill()
                      .map((index) => <span key={index}>⭐</span>)}
                  {product.rating &&
                    Array(parseInt(product.rating))
                      .fill()
                      .map((index) => <span key={index}>⭐</span>)}
                </div>
                <div className={Class.offer}>Upto 5% discount*</div>
              </div>
            </div>
          );
        })}
      <Flex className={Classes.Image_Box}>
        <img src={Logo} alt="ImageLogo" />
      </Flex>
      {Data && Data.isError && <div className="error">{Data.Message}</div>}
      <Flex className={Classes.CheckOut}>
        <input
          type="text"
          className={Classes.Input}
          name="First Name"
          placeholder="First name"
          value={FirstName}
          onChange={handelFirstNameChange}
        />
        <input
          type="text"
          className={Classes.Input}
          name="Last Name"
          placeholder="Last Name"
          value={LastName}
          onChange={handelLastNameChange}
        />
        <input
          type="email"
          className={Classes.Input}
          name="Email"
          placeholder="Email"
          value={Email}
          onChange={handelEmailChange}
        />
        <input
          type="text"
          className={Classes.Input}
          name="Address"
          placeholder="Address"
          value={Address}
          onChange={handelAddressChange}
        />
        <input
          type="text"
          className={Classes.Input}
          name="City"
          placeholder="City"
          value={City}
          onChange={handelCityChange}
        />
        <input
          type="number"
          className={Classes.Input}
          name="Pin Code"
          placeholder="Pin Code"
          value={PinCode}
          onChange={handelPinCodeChange}
        />
        <input
          type="text"
          className={Classes.Input}
          name="Shipping Address"
          placeholder="Shipping Address"
          value={ShippingAddress}
          onChange={handelShippingAddressChange}
        />
        <input
          type="Number"
          className={Classes.Input}
          name="Mobile Number"
          placeholder="Mobile Number"
          value={Mobile}
          onChange={handelMobileChange}
        />

        {Loading && <Loader />}
        {!Loading && (
          <Button
            variant="contained"
            color="secondary"
            className={Classes.btn}
            type="submit"
          >
            Order Now &nbsp; <ShoppingCartIcon />
          </Button>
        )}
      </Flex>
    </form>
  );
}

export default Checkout;
