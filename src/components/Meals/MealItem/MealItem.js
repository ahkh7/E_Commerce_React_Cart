import { useContext } from 'react';
import { MealItemForm } from './MealItemForm';
import { CartContext } from '../../../store/cart-context';

export const MealItem = (props) => {
   const cartCtx = useContext(CartContext);

   const price = `$${props.price.toFixed(2)}`;

   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price
      });
   };

   return (
      <li className="m-4 flex justify-between border-b border-b-gray-300 pb-4">
         <div className="space-y-1 ">
            <h3 className=" text-xl font-bold">{props.name}</h3>
            <div className="italic">{props.description}</div>
            <div className="text-lg font-bold text-red-500">{price}</div>
         </div>
         <div>
            <MealItemForm onAddToCart={addToCartHandler} />
         </div>
      </li>
   );
};
