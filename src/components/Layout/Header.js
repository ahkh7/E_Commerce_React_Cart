import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = (props) => {
   return (
      <Fragment>
         {/* --------------------- Nav  ---------------- */}
         <header className="fixed top-0 left-0 z-10 flex h-[5rem] w-full items-center justify-between bg-orange-700 px-32 text-white shadow-xl">
            <h1 className="text-3xl font-bold tracking-wide">ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
         </header>
         {/* --------------------- Hero  ---------------- */}
         <div className="z-0 h-[25rem] w-full overflow-hidden bg-orange-200">
            <img
               src={mealsImage}
               alt="Meals"
               className="h-[130%] w-[110%] max-w-[120%] -translate-x-[2.5rem] -translate-y-[6rem] -rotate-12 object-cover transition delay-150 duration-1000 ease-in-out hover:translate-x-[1rem] hover:rotate-0 hover:scale-125"
            />
         </div>
      </Fragment>
   );
};
