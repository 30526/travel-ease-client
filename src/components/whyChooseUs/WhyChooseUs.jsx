import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const reasons = [
  {
    id: 1,
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: "Safe & Fully Insured",
    description:
      "Your safety is our priority. Every vehicle in our fleet undergoes rigorous multi-point inspections and comes with comprehensive insurance coverage.",
  },
  {
    id: 2,
    icon: <Banknote className="w-8 h-8 text-amber-500" />,
    title: "No Hidden Charges",
    description:
      "What you see is what you pay. We provide transparent pricing with no surprise fees at the counter, ensuring a stress-free rental experience.",
  },
  {
    id: 3,
    icon: <Headphones className="w-8 h-8 text-amber-500" />,
    title: "24/7 Roadside Support",
    description:
      "We are always with you. Our dedicated support team is available around the clock to assist you with any issues, anywhere your journey takes you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter"
          >
            We provide the best <br />
            <span className="text-amber-500">Experience </span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden flex flex-col items-center text-center"
            >
              {/* Decorative Corner Shape (Matches your screenshot style) */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-bl-[4rem] group-hover:bg-amber-400/20 transition-all duration-500" />

              {/* Icon Container */}
              <div className="relative mb-8 p-5 bg-slate-800 rounded-2xl border border-white/5 group-hover:border-amber-400/50 transition-colors duration-300">
                {reason.icon}
                {/* Floating circle indicator */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full border-4 border-slate-900" />
              </div>

              {/* Text Content */}
              <h3 className="text-white text-2xl font-black mb-4 uppercase italic tracking-tighter">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {reason.description}
              </p>

              {/* Action Button */}
              <Link to={"/allVehicles"}>
              <button className="mt-auto cursor-pointer flex items-center gap-2 bg-amber-400 hover:bg-white text-slate-900 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-amber-400/20">
                Rent Now
                <ArrowRight size={16} />
              </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
