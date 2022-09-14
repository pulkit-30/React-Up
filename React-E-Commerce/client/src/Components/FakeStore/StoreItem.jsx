import React, { useContext } from "react";
import Classes from "./Store.module.css";
import Card from "react-bootstrap/Card";
import useApi from "../../Hooks/useApi";
import Loader from "../Loader/Loader";
import Flex from "../../Ui/Flex/Flex";
import { Button } from "@material-ui/core";
import AuthContext from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import CheckoutContext from "../../Context/CheckoutContext";
function StoreItem(props) {
  const history = useHistory();
  const product = props.product;
  const Context = useContext(AuthContext);
  const Checkout = useContext(CheckoutContext);
  const { Loading, PostData } = useApi();
  return (
    <Card className={Classes.Card}>
      <Flex className={Classes.Card_image}>
        <img src={product.image} alt="ProductImage" />
      </Flex>
      <Card.Body>
        <Card.Title className={Classes.Card_Title}>
          {product.product}
        </Card.Title>
        <hr />
        <Card.Text>Price : Rs {product.price}/-</Card.Text>
        <dic>
          Rating :{" "}
          {Array(parseInt(product.rating))
            .fill()
            .map((index) => (
              <span key={index}>⭐</span>
            ))}
        </dic>
        <div className={Classes.offer}>Upto 5% discount*</div>
      </Card.Body>
      {!Loading && Context.isUser && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={(event) => {
            PostData(`Cart/${Context.User._id}`, {
              ProductId: product._id,
              ProductImage: product.image,
              ProductDescription: product.description,
              ProductName: product.product,
              Price: product.price,
              rating: product.rating,
              Quantity: 1,
            });
          }}
        >
          Add to Cart
        </Button>
      )}
      <br />
      {!Loading && !Context.isUser && (
        <Button className="btn" onClick={() => history.push("Auth/SignIn")}>
          Sign In to Buy
        </Button>
      )}
      {!Loading && Context.isUser && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            Checkout.AddProduct([
              {
                ProductId: product._id,
                ImageUrl: product.image,
                ProductDescription: product.description,
                ProductName: product.product,
                Price: product.price,
                Stars: product.rating,
                Quantity: 1,
              },
            ]);
            history.push(`/Checkout/${Context.User._id}`);
          }}
        >
          Buy Now
        </Button>
      )}
      {Loading && (
        <Flex>
          {" "}
          <Loader />
        </Flex>
      )}
    </Card>
  );
}

export default StoreItem;
