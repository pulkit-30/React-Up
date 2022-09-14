import React, { useContext } from "react";
import Box from "../Ui/Box/Box";
import CartItem from "./CartItems/CartItems";
import CartContext from "../../Store/cart-context";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../Ui/Button/Button";
import Classes from "./CartItems/CartItems.module.css";
import Flex from "../Ui/Flex/Flex";
import Card from "../Ui/Card/Card";
import CustomerForm from "./FoodOrder/CustomerForm";
import Spinner from "../Loaders/Spinner";
function Cart() {
  const Context = useContext(CartContext);
  const [CartItems, updateItems] = useState([]);
  const [isOrdering, setOrdering] = useState(false);
  const [isloading, setLoading] = useState(false);
  const [Message, updateMessage] = useState("Start adding new food items😋");
  function handelClick() {
    if (isOrdering) {
      setOrdering(false);
    } else {
      setOrdering(true);
    }
  }
  useEffect(() => {
    setLoading(true);
    setLoading(false);
    return updateItems(Context.FoodItems);
  }, [Context.FoodItems]);

  async function Order(user) {
    setLoading(true);
    console.log(user);
    console.log(CartItems);
    await fetch(
      "https://react-food-app-d7816-default-rtdb.firebaseio.com/Orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: user,
          userOrder: CartItems,
        }),
      }
    )
      .then(() => Context.RemoveAll())
      .then(() => setLoading(false))
      .then(updateMessage("Your Order 🍿🍔🍕🍟 is Placed Successfully ✔"))
      .then(() => console.log("sucess"));
  }
  return (
    <Box>
      {isloading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Your Taste</h1>

          {CartItems.length > 0 ? (
            <React.Fragment>
              <Card>
                <Flex className={Classes.items}>
                  <div>Food</div>
                  <div>Price</div>
                  <div>Quantity</div>
                </Flex>
              </Card>
              {CartItems.map((item, index) => {
                return <CartItem food={item} index={index} key={index} />;
              })}
            </React.Fragment>
          ) : (
            <Card>
              <Flex className={Classes.items}>
                <div>{Message}</div>
              </Flex>
            </Card>
          )}
          <br />
          {isOrdering && <CustomerForm Click={handelClick} Order={Order} />}

          {CartItems.length > 0 && (
            <div>
              <Card>
                Total Ammount = <strong>{Context.TotalAmmount}</strong>
              </Card>
              <br />
              {!isOrdering && (
                <Flex>
                  <Button
                    className="color"
                    onClick={() => {
                      console.log("clicked");
                      return Context.RemoveAll();
                    }}
                  >
                    Remove All
                  </Button>
                  <Button className="brown" onClick={handelClick}>
                    Place Order
                  </Button>
                </Flex>
              )}
            </div>
          )}
        </div>
      )}
    </Box>
  );
}

export default Cart;
