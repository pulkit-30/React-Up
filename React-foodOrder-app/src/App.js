import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainBody from "./Components/MainBody/MainBody";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Spinner from "./Components/Loaders/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Flex from "./Components/Ui/Flex/Flex";
function App() {
  const [isLoading, updateLoading] = useState(false);
  window.addEventListener("load", () => {
    updateLoading(false);
  });
  function displayloading() {
    updateLoading(true);
  }
  function hideLoading() {}

  return (
    <React.Fragment>
      {isLoading && <Flex className="pre-loader">Loading....</Flex>}
      {!isLoading && (
        <React.Fragment>
          <Router>
            <Header />
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                {!isLoading && <MainBody />}
                {isLoading && <Spinner />}
              </Route>
            </Switch>
            <Footer />
          </Router>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
