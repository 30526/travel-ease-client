import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Wallet,
  ArrowRight,
  Info,
  Timer,
  CarFront,
} from "lucide-react";
import { useNavigate } from "react-router";

const BookingCard = ({ booking }) => {
  const navigate = useNavigate();

  const {
    _id,
    vehicleId,
    vehicleName,
    startDate,
    endDate,
    pickupLocation,
    pickupTime,
    totalDays,
    totalPrice,
    createdAt,
  } = booking;

  // Format the date for a cleaner look (e.g., Jan 05, 2026)
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  // Format the creation time
  const bookTime = new Date(createdAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(251,191,36,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_-12px_rgba(251,191,36,0.4)] group">
      {/* Top Section: Title & Status */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-400 rounded-2xl text-slate-900 shadow-lg shadow-amber-200">
            <CarFront size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              {vehicleName}
            </h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mt-1 uppercase tracking-tighter">
              <span className="bg-slate-200 px-2 py-0.5 rounded text-[10px]">
                ID: {_id.slice(-6)}
              </span>
              <span className="flex items-center gap-1">
                <Timer size={14} /> Booked on: {bookTime}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
            Total to Pay
          </p>
          <div className="flex items-center gap-1 text-3xl font-black text-amber-500">
            <Wallet className="text-slate-900 w-6 h-6" />${totalPrice}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Column 1: Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
                <div className="w-0.5 h-10 bg-slate-100" />
                <div className="w-3 h-3 rounded-full border-2 border-amber-400" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Pickup
                  </p>
                  <p className="font-extrabold text-slate-800">
                    {formatDate(startDate)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Return
                  </p>
                  <p className="font-extrabold text-slate-800">
                    {formatDate(endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Logistics */}
          <div className="grid grid-cols-2 gap-6 bg-slate-50 p-5 rounded-3xl border border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-500">
                <MapPin size={16} />
                <span className="text-[10px] font-black uppercase text-slate-400">
                  Location
                </span>
              </div>
              <p className="text-sm font-bold text-slate-700 leading-tight">
                {pickupLocation}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-500">
                <Clock size={16} />
                <span className="text-[10px] font-black uppercase text-slate-400">
                  Time
                </span>
              </div>
              <p className="text-sm font-bold text-slate-700">
                {pickupTime} AM
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-500">
                <Calendar size={16} />
                <span className="text-[10px] font-black uppercase text-slate-400">
                  Duration
                </span>
              </div>
              <p className="text-sm font-bold text-slate-700">
                {totalDays} Days
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-500">
                <Info size={16} />
                <span className="text-[10px] font-black uppercase text-slate-400">
                  Status
                </span>
              </div>
              <p className="text-xs font-black text-emerald-600 uppercase">
                Confirmed
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate(`/carDetails/${vehicleId}`)}
          className="group/btn w-full bg-slate-900 hover:bg-amber-400 transition-all duration-300 h-14 rounded-2xl flex items-center justify-center gap-3 text-white hover:text-slate-900 font-extrabold text-lg shadow-xl"
        >
          See Car Details
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
