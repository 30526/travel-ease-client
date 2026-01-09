import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Gauge,
  Fuel,
  Car,
  Calendar,
  Users,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import BookCar from "../Booking/bookCar/BookCar";

const PricingCard = ({ car }) => {
  const modalRef = useRef(null);
  const {
    pricePerDay,
    transmission,
    mileage,
    fuelType,
    condition,
    year,
    seats,
  } = car;
  const age = new Date().getFullYear() - year;

  const handleBookNow = () => {
    modalRef.current.showModal();
  };

  return (
    <div className="h-fit w-full max-w-sm bg-white shadow-[0_10px_40px_-15px_rgba(251,191,36,0.3)] rounded-[2.5rem] p-8 border border-amber-50">
      <div className="mb-8">
        <h2 className="flex items-baseline font-extrabold text-slate-900">
          <span className="text-5xl mr-1">${pricePerDay}</span>
          <span className="text-slate-500 font-medium text-lg">/Per Day</span>
        </h2>
      </div>

      {/* Vertical List */}
      <div className="flex flex-col space-y-1 mb-10">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3 text-slate-600">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Transmission</span>
          </div>
          <span className="font-bold text-slate-900">{transmission}</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3 text-slate-600">
            <Gauge className="w-5 h-5" />
            <span className="font-medium">Mileage</span>
          </div>
          <span className="font-bold text-slate-900">{mileage} KM</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3 text-slate-600">
            <Fuel className="w-5 h-5" />
            <span className="font-medium">Fuel Type</span>
          </div>
          <span className="font-bold text-slate-900">{fuelType}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3 text-slate-600">
            <Fuel className="w-5 h-5" />
            <span className="font-medium">Condition</span>
          </div>
          <span className="font-bold text-slate-900">{condition}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3 text-slate-600">
            <Fuel className="w-5 h-5" />
            <span className="font-medium">Car Age</span>
          </div>
          <span className="font-bold text-slate-900">{age} Years</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3 text-slate-600">
            <Users className="w-5 h-5" />
            <span className="font-medium">Seats</span>
          </div>
          <span className="font-bold text-slate-900">{seats} Persons</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-4">
        <motion.button
        whileTap={{scale:0.9}}
          onClick={handleBookNow}
          className="btn flex-1 bg-amber-400 hover:bg-amber-500 border-none text-slate-900 rounded-full h-14 font-extrabold text-lg gap-2 focus:outline-none"
        >
          Book Now
          <ArrowUpRight className="w-5 h-5" />
        </motion.button>
        <button className="btn btn-circle bg-amber-400 hover:bg-amber-500 border-none text-slate-900 h-14 w-14 focus:outline-none">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
      <BookCar car={car} modalRef={modalRef}></BookCar>
    </div>
  );
};

export default PricingCard;
