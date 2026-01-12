import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import Skeleton from "../../components/common/skeleton/Skeleton";
import VehicleCard from "../../components/vehicles/VehicleCard";

const AllVehicles = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [carCategory, setCarCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get("/all-vehicles")
      .then((res) => {
        setVehicles(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Error fetching all vehicles:", err);
        alert("Error fetching all vehicles: " + err.message);
        setLoading(false);
      });
  }, [axios]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This creates the "ripple" effect
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const filteredVehicles = vehicles
    .filter((vehicle) => {
      const categoryMatch =
        carCategory === "All" ||
        vehicle.category?.toLowerCase() === carCategory.toLowerCase();
      const searchMatch =
        vehicle.model?.toLowerCase().includes(searchValue.toLowerCase()) ||
        vehicle.brand?.toLowerCase().includes(searchValue.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sort === "HighToLow") return b.pricePerDay - a.pricePerDay;
      if (sort === "LowToHigh") return a.pricePerDay - b.pricePerDay;
    });

  return (
    <>
      <div className="pt-22 pb-10">
        <div className="container mx-auto px-4">
          <div className="mb-5">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-2"
            >
              Elite Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic uppercase"
            >
              Find Your <span className="text-amber-500">Perfect Ride</span>
            </motion.h1>
          </div>

      
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-[2rem] shadow-sm shadow-amber-200/50 border border-slate-100 flex flex-col lg:flex-row gap-4 items-center"
          >
         
            <div className="relative w-full lg:w-1/3">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by model or brand..."
                className="w-full bg-slate-50 border-none px-4 py-2 rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all font-medium outline-none"
              />
            </div>

          
            <div className="w-full lg:w-2/3 flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {["All", "Luxury", "Sports", "SUV", "Electric"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setCarCategory(category)}
                    className={`px-6 py-2 rounded-xl font-semi text-sm whitespace-nowrap transition-all duration-200
              ${
                category === carCategory
                  ? "bg-amber-400 text-slate-900"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-200 cursor-pointer"
              }`}
                  >
                    {category}
                  </button>
                )
              )}

             
              <div className="ml-auto  lg:block ">
                <select
                  onClick={(e) => setSort(e.target.value)}
                  className="bg-slate-50 border-none px-4 py-3 rounded-xl font-semibold text-slate-600 text-sm outline-none"
                >
                  <option>Sort by: Newest</option>
                  <option value={"LowToHigh"}>Price: Low to High</option>
                  <option value={"HighToLow"}>Price: High to Low</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        key={`${loading}-${carCategory}-${searchValue}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mb-20 "
      >
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <motion.div variants={cardVariants} key={`skeleton-${i}`}>
                <Skeleton />
              </motion.div>
            ))
          : filteredVehicles.map((vehicle) => (
              <motion.div variants={cardVariants} key={vehicle._id}>
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
        {!loading && filteredVehicles.length === 0 && (
          <div className="col-span-full text-center py-30 h-fit">
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              No cars found in "{carCategory}" matching "{searchValue}"
            </p>
            <button
              onClick={() => {
                setSearchValue("");
                setCarCategory("All");
              }}
              className="mt-4 text-amber-500 font-bold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default AllVehicles;
