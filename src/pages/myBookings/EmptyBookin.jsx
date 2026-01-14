import React from "react";
import { motion } from "framer-motion";
import { CarFront, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const EmptyBooking = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="relative inline-block mb-10">
          <div className="w-24 h-24 bg-amber-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-amber-500/30">
            <CarFront size={44} className="text-slate-900" />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-amber-500 rounded-[2rem] animate-ping opacity-20" />
        </div>

        <div className="space-y-4 mb-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-amber-500 text-xl font-black">*</span>
            <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">
              Status: Idle
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
            Your Garage <br />
            <span className="text-amber-500">is empty</span>
          </h2>

          <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-[280px] mx-auto">
            You haven't reserved a vehicle yet. High-performance luxury is just
            a click away.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/allVehicles"
            className="w-full bg-amber-500 hover:bg-slate-900 text-slate-900 hover:text-white py-4 rounded-2xl font-black uppercase italic tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95"
          >
            Explore the Fleet
            <ChevronRight size={16} />
          </Link>

          <Link
            to="/"
            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 border border-slate-100"
          >
            <Home size={14} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default EmptyBooking;
