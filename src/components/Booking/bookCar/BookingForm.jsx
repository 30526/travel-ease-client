import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Phone,
  UserCheck,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const BookingForm = ({ car, modalRef }) => {
  const axios = useAxios();
  const { user } = useAuth();
  const { pricePerDay, vehicleName } = car;
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    pickupLocation: "",
    pickupTime: "",
    phone: "",
    driverType: "self",
  });

  const additionalInfo = {
    vehicleId: car._id,
    vehicleName: car.vehicleName,
    name: user?.displayName || "",
    email: user?.email || "",
    createdAt: new Date().toISOString(),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = end - start;
    return diffTime > 0 ? diffTime / (1000 * 60 * 60 * 24) : 0;
  };

  const totalDays = calculateDays();
  const totalPrice = totalDays * pricePerDay;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      totalDays,
      totalPrice,
      ...additionalInfo,
    };
    axios
      .post("/bookings", bookingData)
      .then(() => {
        modalRef.current.close();
        e.target.reset();
        alert("Booking submitted successfully!");
      })
      .catch((err) => {
        console.error("Error submitting booking:", err.message);
        alert("Failed to submit booking. Please try again.");
      });
  };

  // Reusable Shared Input Styling
  const sharedInputClass =
    "input input-bordered w-full pl-10 focus:outline-none focus:border-amber-500 focus:ring-0 transition-all duration-300";

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          Reserve <span className="text-amber-500">{vehicleName}</span>
        </h2>
        <p className="text-slate-500 mt-2 font-medium">
          Complete your booking details below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Dates (Two Columns) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label text-sm font-bold text-slate-700 uppercase tracking-wider">
              Start Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 text-slate-400 w-5 h-5 z-10" />
              <input
                type="date"
                name="startDate"
                className={`${sharedInputClass} appearance-none`}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label text-sm font-bold text-slate-700 uppercase tracking-wider">
              End Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 text-slate-400 w-5 h-5 z-10" />
              <input
                type="date"
                name="endDate"
                className={`${sharedInputClass} appearance-none`}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Row 2: Location & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label text-sm font-bold text-slate-700 uppercase tracking-wider">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute z-10 left-3 top-2.5 text-slate-400 w-5 h-5" />
              <input
                type="text"
                name="pickupLocation"
                placeholder="Dhanmondi, Dhaka"
                className={sharedInputClass}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label text-sm font-bold text-slate-700 uppercase tracking-wider">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="absolute z-10 left-3 top-2.5 text-slate-400 w-5 h-5" />
              <input
                type="time"
                name="pickupTime"
                className={sharedInputClass}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Row 3: Phone & Driver Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label text-sm font-bold text-slate-700 uppercase tracking-wider">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute z-10 left-3 top-2.5 text-slate-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                placeholder="+8801..."
                className={sharedInputClass}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label text-sm font-bold text-slate-700 uppercase tracking-wider">
              Driver Option
            </label>
            <div className="relative">
              <UserCheck className="absolute z-10 left-3 top-2.5 text-slate-400 w-5 h-5" />
              <select
                name="driverType"
                className="select select-bordered w-full pl-10 focus:outline-none focus:border-amber-500"
                onChange={handleChange}
              >
                <option value="self">Self Drive</option>
                <option value="with_driver">With Driver</option>
              </select>
            </div>
          </div>
        </div>

        {/* Price Summary Panel */}
        <div className="bg-slate-50 border-2 border-dashed border-amber-200 rounded-3xl p-6 transition-all">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-600 font-medium">Rental Duration:</span>
            <span className="font-bold text-slate-900">{totalDays} Days</span>
          </div>
          <div className="flex justify-between items-center border-t border-amber-100 pt-3">
            <span className="text-slate-900 font-bold text-lg">
              Total Amount:
            </span>
            <span className="text-2xl font-black text-amber-600">
              ${totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-amber-400 border-none text-slate-900 font-bold text-lg rounded-2xl h-12 shadow-none transition-all hover:scale-[1.01] flex gap-2"
        >
          <CheckCircle2 className="w-6 h-6" />
          Confirm My Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
