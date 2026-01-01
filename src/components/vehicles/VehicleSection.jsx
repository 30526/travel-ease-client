import React from "react";

import Skeleton from "../common/skeleton/Skeleton";
import VehicleCard from "./VehicleCard";

const VehicleSection = ({ loading, vehicles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
      {loading
        ? vehicles.map((vehicle) => <Skeleton key={vehicle._id}></Skeleton>)
        : vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
          ))}
    </div>
  );
};

export default VehicleSection;
