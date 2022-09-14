import React, { useContext } from "react";
import Button from "../../Ui/Button/Button";
import Card from "../../Ui/Card/Card";
import Flex from "../../Ui/Flex/Flex";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Classes from "./CartItems.module.css";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import CartContext from "../../../Store/cart-context";
function CartItems(props) {
  const Context = useContext(CartContext);
  const handelRemoveItem = () => {
    console.log("clicked");
    console.log(props.food.id);
    Context.RemoveItem(props.food.id, props.index);
  };
  return (
    <Card>
      <Flex className={Classes.items}>
        <div>{props.food.item}</div>
        <div>{props.food.price}</div>

        <Flex className={Classes.items}>
          <Button>
            <RemoveCircleOutlineIcon onClick={handelRemoveItem} />
          </Button>
          <div>{props.food.Ammount}</div>
          <Button
            onClick={() =>
              Context.AddItem({
                id: props.food.id,
                item: props.food.item,
                price: props.food.price,
                Ammount: "1",
              })
            }
          >
            <AddCircleOutlineIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default CartItems;
