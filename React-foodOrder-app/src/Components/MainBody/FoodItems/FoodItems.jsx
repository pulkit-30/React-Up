import React from "react";
import Button from "../../Ui/Button/Button";
import Card from "../../Ui/Card/Card";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./FoodItem.module.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
function FoodItems(props) {
  const Context = useContext(CartContext);
  const [qty, updateqty] = useState("1");

  function handelSubmit(event) {
    event.preventDefault();
    Context.AddItem({
      id: props.food.id,
      item: props.food.food,
      price: props.food.price,
      Ammount: qty,
    });
  }
  return (
    <Card>
      <Flex className={Classes.items}>
        <div>{props.food.food}</div>
        <div>Rs/{props.food.price}</div>

        <Flex>
          <RemoveCircleOutlineIcon
            onClick={() => {
              const currentQty = parseInt(qty);
              if (currentQty === 1) {
                updateqty("1");
              } else {
                updateqty(`${currentQty - 1}`);
              }
            }}
          />
          <span>{qty}</span>
          <AddCircleOutlineIcon
            onClick={() => {
              const currentQty = parseInt(qty);
              updateqty(`${currentQty + 1}`);
            }}
          />
        </Flex>

        <div>
          <Button type="submit" onClick={handelSubmit}>
            <AddCircleIcon />
          </Button>
        </div>
      </Flex>
    </Card>
  );
}

export default FoodItems;
