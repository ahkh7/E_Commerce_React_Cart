import { useEffect, useState } from 'react';
import { Card } from '../UI/Card';
import { MealItem } from './MealItem/MealItem';
import useHttp from '../../hooks/use-http';

export const AvailableMeals = () => {
   const [meals, setMeals] = useState([]);

   const { isLoading, httpError, sendRequest: fetchMeals } = useHttp();

   useEffect(() => {
      const transformData = (dataObj) => {
         const loadedMeals = [];
         // eslint-disable-next-line guard-for-in
         for (const key in dataObj) {
            loadedMeals.push({
               id: key,
               name: dataObj[key].name,
               description: dataObj[key].description,
               price: dataObj[key].price
            });
         }
         setMeals(loadedMeals);
      };

      fetchMeals(
         {
            url: 'https://react-cart-f257c-default-rtdb.firebaseio.com/meals.json'
         },
         transformData
      );
   }, [fetchMeals]);

   if (isLoading) {
      return (
         <section>
            <p className="my-10 text-center text-2xl font-bold ">Loading...</p>
         </section>
      );
   }

   if (httpError) {
      return (
         <section>
            <p className="my-10 text-center text-2xl font-bold text-red-600">
               {httpError}
            </p>
         </section>
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
      <section className="my-8 mx-auto w-[90%] max-w-[60rem] animate-meals_appear">
         <Card>
            <ul className="m-0 list-none p-0">{mealsList}</ul>
         </Card>
      </section>
   );
};
