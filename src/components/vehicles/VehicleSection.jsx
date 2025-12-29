import React from "react";
import ProductCard from "./VehicleCard";
import Skeleton from "../common/skeleton/Skeleton";

const VehicleSection = ({ loading, vehicles }) => {
  console.log(loading, vehicles);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
      {loading
        ? vehicles.map((vehicle) => <Skeleton id={vehicle._id}></Skeleton>)
        : vehicles.map((vehicle) => (
            <ProductCard vehicle={vehicle}></ProductCard>
          ))}
    </div>
  );
};

export default VehicleSection;
