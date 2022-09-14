import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultState = {
  FoodItems: [],
  TotalAmmount: 0,
};
function animateCart() {
  document.getElementById("cart").style.transform = "scale(1.2)";
  setTimeout(() => {
    document.getElementById("cart").style.transform = "scale(1)";
  }, 1000);
}
const handelReducer = (state, action) => {
  if (action.type === "Add") {
    animateCart();
    const updatedTotalAmmount =
      state.TotalAmmount + action.item.price * action.item.Ammount;
    const existing = state.FoodItems.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existing);
    let updateItems;
    if (existing > -1) {
      const existingItem = state.FoodItems[existing];
      updateItems = state.FoodItems;

      existingItem.Ammount =
        parseInt(existingItem.Ammount) + parseInt(action.item.Ammount);
    } else {
      updateItems = state.FoodItems.concat(action.item);
    }

    return {
      FoodItems: updateItems,
      TotalAmmount: updatedTotalAmmount,
    };
  }
  if (action.type === "Remove") {
    animateCart();

    let UpdateItem;
    const id = action.id;
    const index = action.index;

    const item = state.FoodItems[index];
    const TotalAmmount = state.TotalAmmount - item.price;
    console.log(item);
    const Ammount = item.Ammount;
    if (Ammount > 1) {
      UpdateItem = state.FoodItems;
      item.Ammount = Ammount - 1;
    } else {
      UpdateItem = state.FoodItems.filter((item) => item.id !== id && item);
    }
    return {
      FoodItems: UpdateItem,
      TotalAmmount: TotalAmmount,
    };
  }
  if (action.type === "RemoveAll") {
    animateCart();
    return defaultState;
  }
  return defaultState;
};
function CartProvider(props) {
  const [State, dispatch] = useReducer(handelReducer, defaultState);
  const AddToCart = (item) => {
    dispatch({
      type: "Add",
      item: item,
    });
  };
  const RemoveFromCart = (id, index) => {
    dispatch({
      type: "Remove",
      id: id,
      index: index,
    });
  };
  const RemoveAllFromCart = () => {
    dispatch({
      type: "RemoveAll",
    });
  };
  const context = {
    FoodItems: State.FoodItems,
    TotalAmmount: State.TotalAmmount,
    AddItem: AddToCart,
    RemoveItem: RemoveFromCart,
    RemoveAll: RemoveAllFromCart,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
