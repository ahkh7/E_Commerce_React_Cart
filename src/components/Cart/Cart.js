import React, { useContext, useState } from 'react';
import { Modal } from '../UI/Modal';
import { CartContext } from '../../store/cart-context';
import { CartItem } from './CartItem';
import { Checkout } from './Checkout';
import useHttp from '../../hooks/use-http';

export const Cart = (props) => {
   const cartCtx = useContext(CartContext);
   const [isCheckout, setIsCheckout] = useState(false);

   // ------------------------------------------
   // * _____________ const ____________
   // ------------------------------------------
   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   const hasItems = cartCtx.items.length > 0;

   // ------------------------------------------
   // * _____________ fuctions ____________
   // ------------------------------------------
   const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, amount: 1 });
   };

   const cartItems = (
      <ul className="m-0 max-h-[18rem] list-none overflow-auto p-0">
         {cartCtx.items.map((item) => (
            <CartItem
               key={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onRemove={cartItemRemoveHandler.bind(null, item.id)}
               onAdd={cartItemAddHandler.bind(null, item)}
            />
         ))}
      </ul>
   );

   const orderHandler = () => {
      setIsCheckout(true);
   };

   const {
      isLoading: isSubmitting,
      httpError: didSubmit,
      sendRequest: sendOrder
   } = useHttp();

   const submitOrderHandler = async (userData) => {
      //   *--------------------- custom Hook  ----------------
      sendOrder({
         url: 'https://react-cart-f257c-default-rtdb.firebaseio.com/orders.json',
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: {
            user: userData,
            orderedItems: cartCtx.items
         }
      });

      cartCtx.clearCart();
   };

   const modalActions = (
      <div className="space-x-8 text-right">
         {/* --------------------- close btn  ---------------- */}
         <button
            className="px-8 py-1 font-bold text-orange-700 bg-white border border-orange-700 rounded-2xl hover:border-orange-800 hover:bg-orange-800 hover:text-white active:border-orange-800 active:bg-orange-800"
            onClick={props.onClose}
         >
            Close
         </button>
         {/* --------------------- order btn  ---------------- */}
         {hasItems && (
            <button
               className="px-8 py-1 font-bold text-white bg-orange-700 border border-orange-700 rounded-2xl hover:border-orange-800 hover:bg-orange-800 active:border-orange-800 active:bg-orange-800 "
               onClick={orderHandler}
            >
               Order
            </button>
         )}
      </div>
   );

   const cartModalContent = (
      <React.Fragment>
         {cartItems}
         {/* --------------------- amount  ---------------- */}
         <div className="flex items-center justify-between my-4 text-2xl font-bold ">
            <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
         {isCheckout && (
            <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
         )}
         {!isCheckout && modalActions}
      </React.Fragment>
   );

   const isSubmittingModalContent = (
      <p className="text-center">Sending order data...</p>
   );

   const didSubmitModalContent = (
      <React.Fragment>
         <p className="text-center">Successfully sent the order!</p>
         <div className="space-x-8 text-right">
            <button
               className="px-8 py-1 font-bold text-orange-700 bg-white border border-orange-700 rounded-2xl hover:border-orange-800 hover:bg-orange-800 hover:text-white active:border-orange-800 active:bg-orange-800"
               onClick={props.onClose}
            >
               Close
            </button>
         </div>
      </React.Fragment>
   );

   // ------------------------------------------
   // * _____________ The Component ____________
   // ------------------------------------------
   return (
      <Modal onClose={props.onClose}>
         {!isSubmitting && !didSubmit && cartModalContent}
         {isSubmitting && isSubmittingModalContent}
         {!isSubmitting && didSubmit && didSubmitModalContent}
      </Modal>
   );
};
