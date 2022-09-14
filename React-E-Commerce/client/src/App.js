import "./App.css";

import Navbar from "./Components/Header/Navbar";
import DashBoard from "./Pages/DashBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import CartPage from "./Pages/CartPage";
import Checkout from "./Components/Checkout/Checkout";
import CheckOutPage from "./Pages/CheckOutPage";
function App() {
  localStorage.setItem("UserCart", JSON.stringify([]));
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Auth/:Method">
          <AuthPage />
        </Route>
        <Route path="/Profile/:id">
          <DashBoard />
        </Route>
      </Switch>
      <Route path="/cart/:UserId">
        <CartPage />
      </Route>
      <Route path="/Checkout/:UserId" exact>
        <CheckOutPage />
      </Route>
    </Router>
  );
}

export default App;
