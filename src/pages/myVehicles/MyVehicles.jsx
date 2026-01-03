import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import VehicleCard from "../../components/vehicles/VehicleCard";

const MyVehicles = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [myVehicles, setMyVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/all-vehicles?email=${user?.email}`)
      .then((res) => {
        setMyVehicles(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error.message);
        setLoading(false);
      });
  }, [axios, user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
      {loading
        ? myVehicles.map((vehicle) => <Skeleton key={vehicle._id}></Skeleton>)
        : myVehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
          ))}
    </div>
  );
};

export default MyVehicles;
