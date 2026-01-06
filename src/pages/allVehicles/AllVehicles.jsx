import React, { useEffect, useState } from "react";
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto min-h-screen">
      {loading
        ? vehicles.map((vehicle) => <Skeleton key={vehicle._id}></Skeleton>)
        : vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
          ))}
    </div>
  );
};

export default AllVehicles;
