import React from "react";
const CheckoutContext = React.createContext({
  Product: [],
  AddProduct: (Product) => {},
  RemoveProduct: () => {},
});
export default CheckoutContext;
