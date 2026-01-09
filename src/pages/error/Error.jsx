import React from "react";
import { useNavigate } from "react-router";
import { CarFront, ArrowLeft, Home, Search } from "lucide-react";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon Section */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-amber-400/20 blur-[100px] rounded-full w-64 h-64 mx-auto" />
          <div className="relative inline-flex items-center justify-center p-8 bg-white border border-slate-100 rounded-[3rem] shadow-2xl shadow-amber-100/50 animate-bounce-slow">
            <CarFront size={80} className="text-amber-500" strokeWidth={1.5} />
            <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Lost?
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-8xl font-black text-slate-900 tracking-tighter">
            4<span className="text-amber-500">0</span>4
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
            Wrong turn! Page not found.
          </h2>
          <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Professional Navigation Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-xl shadow-slate-200"
          >
            <Home size={20} />
            Back to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 bg-white border-2 border-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-bold text-lg hover:border-amber-400 hover:text-amber-600 transition-all duration-300"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Previous Page
          </button>
        </div>

        {/* Subtle Footer Link */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-sm font-medium">
            Need help finding a car?
            <button
              onClick={() => navigate("/allVehicles")}
              className="ml-1 cursor-pointer text-amber-600 font-bold hover:underline"
            >
              Browse our Fleet
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;

// Add this to your index.css or tailwind config for the slow bounce
/* @keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
*/
