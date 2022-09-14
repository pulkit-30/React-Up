import React, { useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Store from "../Components/FakeStore/Store";
import useApi from "../Hooks/useApi";

function HomePage() {
  const { FetchData } = useApi();
  useEffect(() => {
    FetchData("Product");
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <Store />
    </React.Fragment>
  );
}

export default HomePage;
