import { Fragment } from 'react';
import ReactDOM from 'react-dom';

// ------------------------------------------
// * _____________ Back Drop component ____________
// ------------------------------------------
export const Backdrop = (props) => {
   return (
      <div
         className="fixed top-0 left-0 z-20 h-screen w-full bg-black/75"
         onClick={props.onClose}
         onKeyPress={props.onClose}
      />
   );
};

// ------------------------------------------
// * _____________ Overlay component ____________
// ------------------------------------------
export const ModalOverlay = (props) => {
   return (
      <div className="fixed top-[10vh] left-[5%] z-30 w-[90%] rounded-2xl bg-white p-4 shadow-lg md:left-[calc(50%-20rem)] md:w-[40rem]">
         <div className="contents">{props.children}</div>
      </div>
   );
};

// ------------------------------------------
// * _____________ All Modal component ____________
// ------------------------------------------
const portalElement = document.getElementById('overlays');

export const Modal = (props) => {
   return (
      <Fragment>
         {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            portalElement
         )}
         {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
         )}
      </Fragment>
   );
};
