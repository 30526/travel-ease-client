import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleSection from "../../components/vehicles/vehicleSection";


const Home = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("/vehicles")
      .then((res) => {
        setVehicles(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Error fetching vehicles:", err);
        alert("Error fetching vehicles: " + err.message);
        setLoading(false);
      });
  }, [axios]);

  return (
    <div className="min-h-screen">
      <VehicleSection loading={loading} vehicles={vehicles}></VehicleSection>
    </div>
  );
};

export default Home;
