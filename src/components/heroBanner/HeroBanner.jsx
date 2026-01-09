import React from "react";
import { motion } from "framer-motion";
import { Car, PlusCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-black">
      /* 2. VIDEO LAYER: Fixed width based on Viewport Width (vw) */
      <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[120%] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/yGe3ogTqvSQ?si=Cw6CTDu0qfcn5ECr&start=9&autoplay=1&mute=1&loop=1&playlist=yGe3ogTqvSQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-slate-900 z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 italic"
        >
          DRIVE THE <span className="text-amber-400">FUTURE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed"
        >
          Premium car rentals for your next adventure. Experience luxury,
          comfort, and performance at your fingertips.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/allVehicles">
            <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 
            rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer">
              <Car size={22} />
              Browse Fleet
            </button>
          </Link>

          <Link to="/addVehicles">
            <button
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md
             border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center 
             gap-2 transition-all duration-300 cursor-pointer"
            >
              <PlusCircle size={22} />
              List Your Car
            </button>
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
