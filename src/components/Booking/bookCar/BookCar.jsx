import React from "react";
import BookingForm from "./BookingForm";

const BookCar = ({ modalRef, car }) => {
  return (
    <dialog
      ref={modalRef}
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
        <BookingForm modalRef={modalRef} car={car}></BookingForm>
        <button
          onClick={() => modalRef.current.close()}
          className="btn w-full btn-dash hover:bg-red-50 hover:border-slate-900 text-slate-900 font-semibold text-lg rounded-2xl h-12 shadow-none mt-2"
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};

export default BookCar;
