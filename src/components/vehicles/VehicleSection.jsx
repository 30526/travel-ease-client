import React from "react";
import { motion } from "framer-motion";
import Skeleton from "../common/skeleton/Skeleton";
import VehicleCard from "./VehicleCard";
import { ArrowRight, Car, DollarSign, PlusCircle, Search } from "lucide-react";
import { Link } from "react-router";

const VehicleSection = ({ loading, vehicles }) => {
  return (
    <div className="container mx-auto my-20">
      <div className="justify-items-center my-20">
        <motion.p
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-black text-sm text-amber-500 uppercase tracking-[0.3em]"
        >
          Our Fleets
        </motion.p>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "circOut" }}
          className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter text-center"
        >
          Explore our perfect and <br />{" "}
          <span className="text-amber-500">extensive fleet</span>
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {loading
          ? vehicles.map((vehicle) => <Skeleton key={vehicle._id}></Skeleton>)
          : vehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
            ))}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-amber-50 border border-slate-100 rounded-[2.5rem] p-8 group cursor-pointer transition-all duration-300 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300">
                <Car
                  className="text-amber-600 group-hover:text-white"
                  size={24}
                />
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available Now
              </span>
            </div>

            <h3 className="text-slate-900 text-2xl font-black leading-tight italic uppercase tracking-tighter">
              Ready to <span className="text-amber-500">Drive?</span>
            </h3>
            <p className="text-slate-500 mt-3 text-sm font-medium leading-relaxed">
              Explore our 500+ premium vehicles and book your dream car in
              minutes.
            </p>

            <div className="flex-grow flex items-center justify-center py-6">
              <Search
                size={80}
                className="text-slate-200 group-hover:text-amber-200 group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="mt-auto">
              <ul className="mb-6 space-y-2">
                {[
                  "Instant Booking",
                  "Fully Insured",
                  "24/7 Roadside Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase"
                  >
                    <div className="w-1 h-1 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/allVehicles"
                className="flex items-center gap-2 text-slate-900 font-bold group/btn"
              >
                Browse All Fleet
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-2 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 group cursor-pointer flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300">
                <PlusCircle
                  className="text-amber-400 group-hover:text-slate-900"
                  size={24}
                />
              </div>
              <span className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-full text-[10px] font-black uppercase tracking-wider">
                Passive Income
              </span>
            </div>

            <h3 className="text-white text-2xl font-black leading-tight italic uppercase tracking-tighter">
              Start <span className="text-amber-400">Earning?</span>
            </h3>
            <p className="text-slate-400 mt-3 text-sm font-medium leading-relaxed">
              Turn your spare car into a revenue stream. List today and earn up
              to $1.5k/month.
            </p>

            <div className="flex-grow flex items-center justify-center py-6">
              <DollarSign
                size={100}
                className="text-white/[0.03] group-hover:text-amber-400/[0.05] group-hover:rotate-12 transition-all duration-500"
              />
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {["Verified Owners", "Safe Payouts"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-800 rounded text-[9px] font-bold text-slate-400 uppercase border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/addVehicles">
                <button className="bg-amber-400 hover:bg-white text-slate-900 px-6 py-3 rounded-xl font-bold transition-all text-sm w-full cursor-pointer">
                  List Your Car
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSection;
