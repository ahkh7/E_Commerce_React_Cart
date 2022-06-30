import React from 'react';

export const Input = React.forwardRef((props, ref) => {
   return (
      <div className="mb-2 flex items-center">
         <label htmlFor={props.input.id} className="mr-4 font-bold">
            {props.label}
         </label>
         <input
            ref={ref}
            {...props.input}
            className="w-12 rounded-md border border-gray-300 pl-2 text-center"
         />
      </div>
   );
});
