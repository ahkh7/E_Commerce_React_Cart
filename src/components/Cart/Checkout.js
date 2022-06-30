import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

export const Checkout = (props) => {
   const [formInputsValidity, setFormInputsValidity] = useState({
      name: true,
      street: true,
      city: true,
      postalCode: true
   });

   const nameInputRef = useRef();
   const streetInputRef = useRef();
   const cityInputRef = useRef();
   const postalCodeInputRef = useRef();

   const confirmHandler = (event) => {
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredCity = cityInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;

      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
      const enteredCityIsValid = !isEmpty(enteredCity);

      setFormInputsValidity({
         name: enteredNameIsValid,
         street: enteredStreetIsValid,
         city: enteredCityIsValid,
         postalCode: enteredPostalCodeIsValid
      });

      const formIsValid =
         enteredNameIsValid &&
         enteredStreetIsValid &&
         enteredCityIsValid &&
         enteredPostalCodeIsValid;

      if (!formIsValid) {
         return;
      }

      props.onConfirm({
         name: enteredName,
         street: enteredStreet,
         city: enteredCity,
         postalCode: enteredPostalCode
      });
   };

   // ------------------------------------------
   // * _____________ Styling ____________
   // ------------------------------------------
   const controlClasses =
      'border-gray-900 mb-2 flex space-x-5 [&>label]:w-[6rem] [&>input]:w-[12rem] [&>input]:border-2 [&>input]:rounded-md [&>input]:px-1';

   const controlClassesError =
      '[&>label]:color-red-500 [&>input]:border-red-500 [&>p]:text-red-500 [&>p]:w-[12rem] ';

   const nameControlClasses = `${controlClasses} ${
      formInputsValidity.name ? '' : controlClassesError
   }`;
   const streetControlClasses = `${controlClasses} ${
      formInputsValidity.street ? '' : controlClassesError
   }`;
   const postalCodeControlClasses = `${controlClasses}  ${
      formInputsValidity.postalCode ? '' : controlClassesError
   }`;
   const cityControlClasses = `${controlClasses} ${
      formInputsValidity.city ? '' : controlClassesError
   }`;

   // ------------------------------------------
   // * _____________ The Component ____________
   // ------------------------------------------
   return (
      <form
         className="mx-0 mt-8 flex h-[15rem]  flex-col items-center justify-center overflow-auto"
         onSubmit={confirmHandler}
      >
         <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
         </div>
         <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!formInputsValidity.street && <p>Please enter a valid street!</p>}
         </div>
         <div className={postalCodeControlClasses}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalCodeInputRef} />
            {!formInputsValidity.postalCode && (
               <p>Please enter a valid code!</p>
            )}
         </div>
         <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef} />
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
         </div>
         <div className="flex justify-center mt-8 space-x-4">
            <button
               type="button"
               onClick={props.onCancel}
               className="px-8 text-orange-700 bg-white border border-orange-700 rounded-2xl hover:border-orange-800 hover:bg-orange-800 hover:text-white active:border-orange-800 active:bg-orange-800"
            >
               Cancel
            </button>
            <button className="px-8 text-white bg-orange-700 border border-orange-700 rounded-2xl hover:border-orange-800 hover:bg-orange-800 active:border-orange-800 active:bg-orange-800">
               Confirm
            </button>
         </div>
      </form>
   );
};
