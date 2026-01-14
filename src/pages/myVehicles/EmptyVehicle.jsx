import React from "react";
import { motion } from "framer-motion";
import { Plus, CarFront, ShieldCheck, DollarSign } from "lucide-react";
import { Link } from "react-router";

const EmptyVehicle = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-500 text-xl font-black">*</span>
              <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">
                Fleet Management
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.9] mb-6">
              Start earning with <br />
              <span className="text-amber-500">your elite fleet</span>
            </h2>

            <p className="text-slate-500 font-medium text-sm md:text-base mb-8 leading-relaxed">
              You haven't listed any vehicles yet. Join our community of hosts
              and turn your premium car into a high-yielding asset today.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { icon: DollarSign, text: "Set your own daily rental rates" },
                {
                  icon: ShieldCheck,
                  text: "Premium insurance coverage included",
                },
                { icon: CarFront, text: "Reach thousands of elite travelers" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <item.icon size={14} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/addVehicles"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 px-8 py-4 rounded-2xl font-black uppercase italic tracking-widest text-xs transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-95"
            >
              <Plus size={18} strokeWidth={3} />
              Add Your First Vehicle
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-slate-50 rounded-[3rem] -rotate-3 scale-105 border border-slate-100" />

            <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 relative">
                <CarFront size={40} className="text-slate-900" />
              <div className="absolute top-2 animate-ping w-15 h-15 bg-amber-500 opacity-40 rounded-[1.2rem] flex items-center justify-center mb-6">
              </div>

              </div>
              <p className="text-slate-300 font-black uppercase italic tracking-widest text-lg">
                No Vehicles <br /> Currently Listed
              </p>
              <div className="mt-8 w-full space-y-3 opacity-20">
                <div className="h-4 bg-slate-400 rounded-full w-3/4 mx-auto animate-pulse" />
                <div className="h-4 bg-slate-300 rounded-full w-1/2 mx-auto animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmptyVehicle;
