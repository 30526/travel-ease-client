import React, { useEffect, useState } from "react";
import Slider from "../../components/slider/Slider";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const axios = useAxios();
  const carId = useParams();
  console.log(car);
  const images =
    car?.galleryImages?.length > 1 ? car.galleryImages : [car?.coverImage];
  useEffect(() => {
    axios
      .get(`/vehicles/${carId.id}`)
      .then((res) => {
        // console.log(res.data);
        setCar(res.data);
      })
      .catch((err) => {
        console.error("Error fetching car details:", err.message);
      });
  }, [axios, carId.id]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-4 container mx-auto my-10">
      <div className="md:col-span-2 lg:col-span-3"></div>
      <div className="md:col-span-5 lg:col-span-6">
        <Slider images={images}></Slider>
      </div>
    </div>
  );
};

export default CarDetails;
