import React, { useContext, useEffect, useState } from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Cart.module.css";
import Image from "../../Assets/CartImage.png";
import { Button } from "@material-ui/core";
import CartPrdocuts from "./CartPrdocuts";
import useApi from "../../Hooks/useApi";
import AuthContext from "../../Context/AuthContext";
import { useHistory } from "react-router";
import CheckoutContext from "../../Context/CheckoutContext";
function Cart() {
  const history = useHistory();
  const CheckOut = useContext(CheckoutContext);
  const { Data, FetchData, Loading, DeleteData } = useApi();
  const [totalCost, updateTotalCost] = useState();
  let totalPrice = 0;
  const Context = useContext(AuthContext);
  useEffect(() => {
    FetchData(`Cart?UserId=${Context.User._id}`);
  }, []);
  const Remove = (id, UserId) => {
    DeleteData(`Cart/${id}?UserId=${UserId}`);
  };
  return (
    <Flex>
      {!Loading && Data.length !== 0 && console.log(Data)}
      <Flex className={Classes.Cart_Top}>
        <div className={Classes.Cart_Top_Image}>
          <img src={Image} alt="Cart Png" />
        </div>
        <div>
          <h2>Pulkit Gupta's Cart</h2>
          <br />

          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              CheckOut.AddProduct(Data);
              history.push(`/Checkout/${Context.User._id}`);
            }}
          >
            Checkout Now
          </Button>
        </div>
      </Flex>
      <Flex>
        {Data.length !== 0 &&
          Data.map((product, index) => {
            totalPrice += product.Price;

            return (
              <CartPrdocuts product={product} key={index} Remove={Remove} />
            );
          })}
      </Flex>
    </Flex>
  );
}

export default Cart;
