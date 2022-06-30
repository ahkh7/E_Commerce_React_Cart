export const Card = (props) => {
   return (
      <div className="rounded-xl bg-gray-200 p-4 shadow-xl">
         {props.children}
      </div>
   );
};
