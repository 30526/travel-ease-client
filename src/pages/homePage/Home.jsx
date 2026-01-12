import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleSection from "../../components/vehicles/vehicleSection";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import LogoMarque from "../../components/marquee/LogoMarque";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

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
      <section>
        <HeroBanner></HeroBanner>
      </section>
      <section>
        <LogoMarque></LogoMarque>
        <img src="https://ibb.co.com/nqzx0LYb" alt="" />
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section className="relative">
        <VehicleSection loading={loading} vehicles={vehicles}></VehicleSection>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
    </>
  );
};

export default Home;
