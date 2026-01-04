import React from "react";
import {
  Settings,
  Gauge,
  Fuel,
  Car,
  User,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  // Destructuring the JSON data for easy access
  const {
    vehicleName,
    brand,
    transmission,
    mileage,
    fuelType,
    condition,
    year,
    seats,
    pricePerDay,
    coverImage,
  } = vehicle;

  const age = new Date().getFullYear() - year;

  return (
    <div className="card w-full max-w-sm bg-base-100   overflow-hidden border border-gray-100 group transition-all duration-300 ">
      {/* --- Image Section --- */}
      <figure className="relative h-64 overflow-hidden bg-black">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-75"
        />
        {/* Yellow Brand Badge */}
        <div className="absolute bottom-0 left-0 bg-[#f9b233] text-black font-bold px-6 py-2 rounded-tr-2xl shadow-md">
          {brand}
        </div>
      </figure>

      {/* --- Content Section --- */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-extrabold text-[#001d3d] mb-2">
          {vehicleName}
        </h2>

        <div className="divider my-0 opacity-50"></div>

        {/* --- Attributes Grid (2x3) --- */}
        <div className="grid grid-cols-3 gap-y-4 text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{mileage} KM</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{condition}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm">
              Age {age}
            </span>
            {/* Logic to mimic "Age 25" style from image */}
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{seats} Seats</span>
          </div>
        </div>

        {/* --- Price Bar --- */}
        <div className="bg-gray-100/80 rounded-2xl py-3 px-4 text-center mt-6">
          <p className="text-[#001d3d] font-bold text-lg">
            Starting From <span className="text-[#f9b233]">${pricePerDay}</span>
            / Day
          </p>
        </div>

        {/* --- Action Button --- */}
        <Link to={`/carDetails/${vehicle._id}`}>
          <button className="btn w-full bg-[#f9b233] hover:bg-[#000000] hover:text-white  duration-300 border-none text-[#001d3d] font-extrabold text-lg rounded-xl h-14 group/btn">
            Details Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
