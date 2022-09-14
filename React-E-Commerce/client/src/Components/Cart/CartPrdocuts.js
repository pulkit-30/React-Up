import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../Context/AuthContext";
import CheckoutContext from "../../Context/CheckoutContext";
import useApi from "../../Hooks/useApi";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Cart.module.css";
function CartPrdocuts(props) {
  const history = useHistory();
  const Context = useContext(AuthContext);
  const CheckOut = useContext(CheckoutContext);
  const product = props.product;
  const { DeleteData } = useApi();
  return (
    <Flex className={Classes.Box}>
      <div className={Classes.image}>
        <img src={product.ProductImage} alt="productImage" />
      </div>
      <div className={Classes.Detail_Box}>
        <h3 className={Classes.ProductName}>{product.ProductName}</h3>
        <p className={Classes.para}>{product.ProductDescription}</p>
        <div className={Classes.Price}>Rs {product.Price}/-</div>
        <div className={Classes.stars}>
          {Array(parseInt(product.rating))
            .fill()
            .map((index) => (
              <span key={index}>⭐</span>
            ))}
        </div>
        <Flex className={Classes.Box__Bottom}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              props.Remove(product._id, product.UserId);
            }}
          >
            Remove From Cart
          </Button>
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              CheckOut.AddProduct([
                {
                  ProductId: product._id,
                  ImageUrl: product.ProductImage,
                  ProductDescription: product.ProductDescription,
                  ProductName: product.ProductName,
                  Price: product.Price,
                  Stars: product.rating,
                  Quantity: 1,
                },
              ]);
              history.push(`/Checkout/${Context.User._id}`);
            }}
          >
            Buy Now
          </Button>
        </Flex>
      </div>
    </Flex>
  );
}

export default CartPrdocuts;
