import React from "react";
const CartContext = React.createContext({
  FoodItems: [],
  TotalAmmount: 0,
  AddItem: (item) => {},
  RemoveItem: (id, index) => {},
  RemoveAll: () => {},
});
export default CartContext;
