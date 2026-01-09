import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import Skeleton from "../../components/common/skeleton/Skeleton";
import VehicleCard from "../../components/vehicles/VehicleCard";

const AllVehicles = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

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

  return (
    <motion.div
      key={loading ? "loading" : "loaded"}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto min-h-screen"
    >
      {loading
        ? Array.from({ length: 8 }).map((_, i) => (
            <motion.div variants={cardVariants} key={`skeleton-${i}`}>
              <Skeleton />
            </motion.div>
          ))
        : vehicles.map((vehicle) => (
            <motion.div variants={cardVariants} key={vehicle._id}>
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
    </motion.div>
  );
};

export default AllVehicles;
