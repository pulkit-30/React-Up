import React from "react";
import Box from "../../Ui/Box/Box";
import Flex from "../../Ui/Flex/Flex";
import Classes from "../FakeStore/Store.module.css";
function Item(props) {
  const product = props.data;
  console.log(product);
  const Public_folder = "http://localhost/images/";

  return (
    <Box>
      <Flex className={Classes.Card_image}>
        <img src={Public_folder + product.ProductImage} alt="ProductImage" />
      </Flex>
      <div>
        <div className={Classes.Card_Title}>{product.ProductName}</div>
        <hr />
        <div>Price : Rs {product.Price}/-</div>
        <div>
          Rating :
          {Array(parseInt(product.Stars))
            .fill()
            .map((index) => (
              <span key={index}>⭐</span>
            ))}
        </div>
        <div className={Classes.offer}>Upto 5% discount*</div>
      </div>
      {props.children}
    </Box>
  );
}

export default Item;
