import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleSection from "../../components/vehicles/vehicleSection";
import HeroBanner from "../../components/heroBanner/HeroBanner";

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
    <>
      <section className="min-h-screen">
        <HeroBanner></HeroBanner>
      </section>
      <section className="relative">
        <VehicleSection loading={loading} vehicles={vehicles}></VehicleSection>
      </section>
    </>
  );
};

export default Home;
