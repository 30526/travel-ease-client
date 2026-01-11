import React from "react";

const logos = [
  { src: "https://i.ibb.co.com/9msQvr1N/BMW.png", alt: "BMW" },
  { src: "https://i.ibb.co.com/QVFdt2Y/ferrari.png", alt: "Ferrari" },
  { src: "https://i.ibb.co.com/F4Qgq3M7/lamborgini.png", alt: "Lamborghini" },
  { src: "https://i.ibb.co.com/84N2RCgQ/marcedes.png", alt: "Mercedes" },
  { src: "https://i.ibb.co.com/HpXQv0DP/tesla.png", alt: "Tesla" },
  { src: "https://i.ibb.co.com/kVrXGRw3/toyota.png", alt: "Toyota" },
];

const CarLogos = () => {
  return (
    <div className="flex items-center gap-16 md:gap-24 py-6 px-10">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-12 md:h-16 w-auto object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default CarLogos;
