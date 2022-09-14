import React, { useReducer } from "react";
import CheckoutContext from "./CheckoutContext";
const DefaultState = {
  Product: [],
};
const DispatchActions = (state, action) => {
  if (action.type === "Add") {
    return {
      Product: action.Product,
    };
  }
  return DefaultState;
};
function CheckoutProvider(props) {
  const [state, dispatch] = useReducer(DispatchActions, DefaultState);
  const Add = (Product) => {
    dispatch({
      Product: Product,
      type: "Add",
    });
  };
  const Remove = () => {
    dispatch({
      type: "Remove",
    });
  };
  const newCheckOutContext = {
    Product: state.Product,
    AddProduct: Add,
    RemoveProduct: Remove,
  };
  return (
    <CheckoutContext.Provider value={newCheckOutContext}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
