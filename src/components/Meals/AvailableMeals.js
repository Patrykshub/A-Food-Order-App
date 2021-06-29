import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import './Loader.css';
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-my-burger360-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      
      const loadedMeals = [];
        setIsLoading(false);
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  let content = <p>No meals yet.</p>

  if (isLoading) {
    content = (
      <div className="lds_ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
      
        <ul>{ isLoading ? content : mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
