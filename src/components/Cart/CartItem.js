export const CartItem = (props) => {
   const price = `$${props.price.toFixed(2)}`;

   return (
      <li className="my-4 flex items-center justify-between border-b-2 border-b-red-800 py-4">
         {/* --------------------- Item Info  ---------------- */}
         <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
               {props.name}
            </h2>
            <div className="flex w-[10rem] items-center justify-between">
               <span className="font-bold text-red-600">{price}</span>
               <span className="rounded-md border border-gray-300 py-1 px-3 font-bold	text-gray-900">
                  x {props.amount}
               </span>
            </div>
         </div>
         <div className="flex flex-col md:flex-row">
            {/* --------------------- remove btn  ---------------- */}
            <button
               className="m-1 ml-4 w-12 rounded-md border border-red-800 bg-transparent text-center text-lg font-bold text-red-800 hover:bg-red-700 hover:text-white  active:bg-red-900 active:text-white "
               onClick={props.onRemove}
            >
               −
            </button>
            {/* --------------------- add btn  ---------------- */}
            <button
               className="m-1 ml-4 w-12 rounded-md border border-red-800 bg-transparent text-center text-lg font-bold text-red-800 hover:bg-red-700 hover:text-white  active:bg-black/75 active:text-white  "
               onClick={props.onAdd}
            >
               +
            </button>
         </div>
      </li>
   );
};
