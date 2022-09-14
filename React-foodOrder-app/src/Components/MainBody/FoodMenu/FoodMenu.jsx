import React, { useEffect, useState } from "react";
import FoodItems from "../FoodItems/FoodItems";
import Spinner from "../../Loaders/Spinner";
import FoodList from "../FoodList/FoodList";
function FoodMenu(props) {
  const [FoodItem, updateFoodItems] = useState([]);
  const [isError, updateError] = useState(false);
  const [isLoading, updateLoading] = useState(false);
  const error = "Opps there is something went wrong !!!😵🥴";
  const setItems = (data) => {
    let LoadedData = [];
    for (const Key in data) {
      LoadedData.push({
        id: data[Key].id,
        food: data[Key].food,
        price: data[Key].price,
      });
    }
    updateFoodItems(LoadedData);
  };
  useEffect(() => {
    updateLoading(true);
    updateError(false);
    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://react-food-app-d7816-default-rtdb.firebaseio.com/Meals.json"
        );
        if (!request.ok) {
          throw error;
        }
        const data = await request.json();
        setItems(data);
      } catch (error) {
        updateError(true);
      }
      updateLoading(false);
    };
    return fetchData();
  }, []);
  return (
    <React.Fragment>
      <FoodList />
      {!isError &&
        FoodItem.map((food, index) => {
          return <FoodItems food={food} key={index} />;
        })}
      {isError && error}
      {isLoading && <Spinner />}
    </React.Fragment>
  );
}

export default FoodMenu;
