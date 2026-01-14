import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-62 w-full"></div>
      <div className="skeleton h-6 "></div>
      <div className="flex gap-2">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
      <div className="flex gap-2">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
      <div className="skeleton h-6 w-full"></div>
      <div className="skeleton h-6 w-full"></div>
    </div>
  );
};

export default Skeleton;
