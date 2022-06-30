import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../store/cart-context';

export const HeaderCartButton = (props) => {
   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
   const cartCtx = useContext(CartContext);

   // ------------------------------------------
   // * _____________ const ____________
   // ------------------------------------------
   const { items } = cartCtx;

   const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
   }, 0);

   const btnClasses = `flex items-center justify-around space-x-2 rounded-3xl bg-red-900 px-4 py-3 text-white hover:bg-black active:bg-black ${
      btnIsHighlighted ? 'animate-cart_bump' : ''
   } `;
   // ------------------------------------------
   // * _____________ fuctions ____________
   // ------------------------------------------
   useEffect(() => {
      if (items.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);
      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);
      // eslint-disable-next-line consistent-return
      return () => {
         clearTimeout(timer);
      };
   }, [items]);

   // ------------------------------------------
   // * _____________ The Component ____________
   // ------------------------------------------
   return (
      <button className={btnClasses} onClick={props.onClick}>
         <span className="h-6 w-6">
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className="rounded-3xl bg-orange-300 px-4 py-1 font-bold text-black ">
            {numberOfCartItems}
         </span>
      </button>
   );
};
