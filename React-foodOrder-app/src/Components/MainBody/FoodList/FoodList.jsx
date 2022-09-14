import Card from "../../Ui/Card/Card";
import React from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "../FoodItems/FoodItem.module.css";
function FoodList() {
  return (
    <Card>
      <Flex className={Classes.items}>
        <div>FoodItems</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Add To Cart</div>
      </Flex>
    </Card>
  );
}

export default FoodList;
