import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const MenuBar = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the menu reveal
  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: { x: 0, transition: { type: "spring", stiffness: 400, damping: 40 } },
  };

  return (
    <div className="lg:hidden">
      {/* 1. The Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-slate-100 rounded-xl transition-colors active:scale-95"
      >
        <Menu className="h-7 w-7 text-slate-900" />
      </button>

      {/* 2. The Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />

            {/* Slide-out Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white z-[101] shadow-2xl flex flex-col"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between p-6 border-b border-slate-50">
                <span className="text-amber-500 font-black italic uppercase tracking-tighter text-xl">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 rounded-full hover:bg-amber-400 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links Area */}
              <nav className="flex-grow p-6 flex flex-col justify-center">
                <ul className="space-y-6">
                  <div className="flex flex-col gap-8 text-3xl font-black italic uppercase tracking-tighter text-slate-900">
                    {navLinks} 
                  </div>
                </ul>
              </nav>

              {/* Footer / Social Info */}
              <div className="p-8 bg-slate-50 mt-auto">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Follow the journey
                </p>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-3 bg-white rounded-xl border border-slate-100 text-slate-600 hover:text-amber-500 transition-colors shadow-sm"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuBar;
