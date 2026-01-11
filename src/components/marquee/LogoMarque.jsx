import React from "react";
import Marquee from "react-fast-marquee";
import CarLogos from "./CarLogos";

const LogoMarquee = () => {
  return (
    <div className="py-10 bg-slate-50/50 border-y border-slate-100 backdrop-blur-sm">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-700">
          Trusted by Global Enthusiasts
        </p>
      </div>

      <Marquee
        speed={40}
        gradient={true}
        gradientColor="#f8fafc" // Matches slate-50 background
        gradientWidth={100}
        pauseOnHover={true}
      >
        <CarLogos />
        <CarLogos />
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
