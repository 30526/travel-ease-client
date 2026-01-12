import React from "react";
import { motion } from "framer-motion";
import { Search, CalendarCheck, MapPin, Key } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Find Your Car",
    description:
      "Browse our diverse fleet and select the perfect vehicle for your journey.",
    icon: <Search className="w-10 h-10 text-amber-400" />,
  },
  {
    id: "02",
    title: "Book & Pay",
    description:
      "Secure your rental with quick online booking and flexible payment options.",
    icon: <CalendarCheck className="w-10 h-10 text-amber-400" />,
  },
  {
    id: "03",
    title: "Pick Up & Drive",
    description:
      "Collect your car from a convenient location and start your adventure.",
    icon: <MapPin className="w-10 h-10 text-amber-400" />,
  },
  {
    id: "04",
    title: "Return & Finish",
    description:
      "Drop off the car with ease and complete your hassle-free rental process.",
    icon: <Key className="w-10 h-10 text-amber-400" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="md:p-20 py-20 bg-amber-50 mb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-[2px] bg-amber-400"></div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
              Process
            </span>
            <div className="w-8 h-[2px] bg-amber-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
            How It <span className="text-amber-500">Works</span>
          </h2>
          <p className="text-slate-500 font-medium">
            EASY STEPS TO YOUR RENTAL
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group bg-[#1a1c2e] p-8 rounded-3xl overflow-hidden cursor-default"
            >
              {/* Background Accent Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step Number Badge */}
              <div className="absolute top-0 right-0 bg-white w-16 h-12 rounded-bl-3xl flex items-center justify-center group-hover:bg-amber-400 transition-all duration-300">
                <span className="text-slate-900 font-black text-x">
                  {step.id}
                </span>
              </div>

              {/* Icon Container */}
              <div className="mb-8 relative z-10">
                <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
