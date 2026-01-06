import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { Car, CheckCircle, BookmarkCheck } from "lucide-react";
import MyVehiclesCard from "./MyVehiclesCard";

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

  const handleDelete = (id) => {
    axios
      .delete(`/vehicles/${id}`)
      .then((res) => {
        console.log(res);
        const restVehicles = myVehicles.filter((vehicle) => vehicle._id != id);
        if (res.data.deletedCount) alert("Deleted Successfully");
        setMyVehicles(restVehicles);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-slate-900 px-6 py-4 rounded-2xl
       text-white shadow-lg border border-slate-800 mb-8 container mx-auto"
      >
        {/* Title Section - Now more compact */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-1 h-8 bg-amber-400 rounded-full" />{" "}
          {/* Accent line */}
          <div>
            <h1 className="text-xl font-bold tracking-tight">My Fleet</h1>
            <p className="text-slate-400 text-xs font-medium">
              Inventory Overview
            </p>
          </div>
        </div>

        {/* Stats Section - Unified Row with Dividers */}
        <div className="flex items-center gap-6 md:gap-5">
          {/* Total Stat */}
          <div className="flex items-center gap-3">
            <div className="text-amber-400 bg-amber-400/10 p-2 rounded-lg">
              <Car size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">
                Total
              </p>
              <p className="text-lg font-black leading-none">
                {myVehicles.length}
              </p>
            </div>
          </div>

          {/* Divider (Hidden on small mobile) */}
          <div className="hidden sm:block h-8 w-[1px] bg-slate-800" />

          {/* Available Stat */}
          <div className="flex items-center gap-3">
            <div className="text-emerald-400 bg-emerald-400/10 p-2 rounded-lg">
              <CheckCircle size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">
                Available
              </p>
              <p className="text-lg font-black leading-none">{"available"}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-[1px] bg-slate-800" />

          {/* Booked Stat */}
          <div className="flex items-center gap-3">
            <div className="text-amber-500 bg-amber-500/10 p-2 rounded-lg">
              <BookmarkCheck size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">
                Booked
              </p>
              <p className="text-lg font-black leading-none">{"booked"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
        {loading
          ? myVehicles.map((vehicle) => <Skeleton key={vehicle._id}></Skeleton>)
          : myVehicles.map((vehicle) => (
              <MyVehiclesCard
                key={vehicle._id}
                vehicle={vehicle}
                handleDelete={handleDelete}
              ></MyVehiclesCard>
            ))}
      </div>
    </>
  );
};

export default MyVehicles;
