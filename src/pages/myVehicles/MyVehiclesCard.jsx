import React from "react";
import { useNavigate } from "react-router";
import {
  Edit3,
  Trash2,
  Eye,
  Calendar,
  Tag,
  DollarSign,
  CheckCircle2,
  Clock,
} from "lucide-react";

const MyVehiclesCard = ({ vehicle, handleDelete }) => {
  const navigate = useNavigate();

  const {
    _id,
    vehicleName,
    brand,
    category,
    year,
    pricePerDay,
    coverImage,
    availability,
  } = vehicle;

  return (
    <div className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(251,191,36,0.25)] transition-all duration-500">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-slate-900 uppercase tracking-tighter shadow-sm">
            {category}
          </span>
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter shadow-sm ${
              availability === "Available"
                ? "bg-emerald-500 text-white"
                : "bg-slate-500 text-white"
            }`}
          >
            {availability}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-black text-slate-900 truncate pr-2">
              {vehicleName}
            </h3>
            <div className="flex items-center text-amber-500 font-black">
              <DollarSign size={16} />
              <span className="text-xl">{pricePerDay}</span>
              <span className="text-[10px] text-slate-400 ml-1 uppercase">
                /day
              </span>
            </div>
          </div>
          <p className="text-slate-500 text-sm font-bold flex items-center gap-1">
            {brand} • <Calendar size={14} /> {year}
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {/* Primary View Action */}
          <button
            onClick={() => navigate(`/carDetails/${_id}`)}
            className="col-span-2 btn bg-amber-400 hover:bg-amber-500 border-none text-slate-900 font-black rounded-xl h-12 gap-2 focus:outline-none"
          >
            <Eye size={18} /> View Details
          </button>

          {/* Secondary Management Actions */}
          <button
            onClick={() => navigate(`/update-vehicle/${_id}`)}
            className="btn btn-outline border-slate-200 hover:bg-slate-900 hover:border-slate-900 text-slate-600 hover:text-white font-bold rounded-xl h-12 gap-2 focus:outline-none"
          >
            <Edit3 size={16} /> Update
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline border-red-100 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white font-bold rounded-xl h-12 gap-2 focus:outline-none"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyVehiclesCard;
