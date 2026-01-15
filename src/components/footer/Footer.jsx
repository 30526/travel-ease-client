import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                className="h-8"
                src="https://i.ibb.co.com/TB9mqn4v/tagged.png"
                alt="Brand Logo"
              />
              <span className="text-white font-black italic uppercase tracking-tighter text-2xl">
                Travel<span className="text-amber-500">Ease</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Experience the pinnacle of luxury travel. From exotic supercars to
              premium SUVs, we provide the keys to your next elite adventure.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h6 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">
              Fleet Categories
            </h6>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Luxury Sedans",
                "Exotic Supercars",
                "Premium SUVs",
                "Electric Elite",
                "Special Editions",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-amber-500 group-hover:w-3 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support & Info */}
          <div>
            <h6 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">
              Concierge
            </h6>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { icon: MapPin, text: "Beverly Hills, CA 90210" },
                { icon: Phone, text: "+1 (555) 000-RENT" },
                { icon: Mail, text: "concierge@travelease.com" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <item.icon size={16} className="text-amber-500" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h6 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">
              Join the Elite
            </h6>
            <p className="text-xs mb-6 leading-relaxed">
              Subscribe to receive exclusive offers and early access to our
              newest fleet additions.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 px-5 text-sm text-white focus:outline-none focus:border-amber-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-amber-500 hover:bg-white text-slate-900 px-4 rounded-lg transition-all active:scale-95">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Taibur Rahman Apu. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-500">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
