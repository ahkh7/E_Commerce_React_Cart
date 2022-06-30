import React from 'react';

export const CartContext = React.createContext({
   items: [],
   totalAmount: 0,
   addItem: (item) => {
      return item;
   },
   removeItem: (id) => {
      return id;
   },
   clearCart: () => {
      return true;
   }
});
