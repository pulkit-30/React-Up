import React, { useEffect } from "react";
import Classes from "./Store.module.css";
import useApi from "../../Hooks/useApi";
import Loader from "../Loader/Loader";
import Flex from "../../Ui/Flex/Flex";
import StoreItem from "./StoreItem";
function Store() {
  const { Data, FakeStoreData } = useApi();
  useEffect(() => {
    FakeStoreData(
      "https://blooming-coast-06058.herokuapp.com/E-commerce/FakeStore"
    );
  }, [FakeStoreData]);

  return (
    <Flex className={Classes.Store}>
      {Data.length === 0 && <Loader />}
      {Data.length !== 0 &&
        Data.map((product) => {
          return <StoreItem product={product} />;
        })}
    </Flex>
  );
}

export default Store;
