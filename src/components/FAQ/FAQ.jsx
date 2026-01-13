import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What Do I Need To Rent A Car?",
    answer: "A valid driver's license (held for at least 1 year), a major credit card for the security deposit, and a valid passport or ID. International renters may require an International Driving Permit (IDP)."
  },
  {
    question: "How Old Do I Need To Be To Rent A Car?",
    answer: "Minimum age is 21 for standard vehicles. For our Luxury and Sport categories, the minimum age is 25. Drivers under 25 may be subject to a 'Young Driver' daily surcharge."
  },
  {
    question: "Can I Rent A Car With A Debit Card?",
    answer: "While we accept debit cards for final payments, a physical credit card in the primary driver's name is strictly required for the security authorization at the time of vehicle pickup."
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
         
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 flex justify-center items-center z-0 opacity-10">
               <span className="text-[35rem] font-bold text-slate-900 select-none">Q</span>
            </div>
            
           
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://i.ibb.co.com/PvcP7jk7/carpng.png" 
              alt="Premium Sedan"
              className="relative top-10 z-10 w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

         
          <div>
            <div className="mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-amber-500 mb-4"
              >
                <Sparkles size={16} />
                <span className="font-black uppercase tracking-[0.3em] text-xs">Frequently Asked Questions</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter"
              >
                Everything you need <br />
                <span className="text-amber-500 font-black">to know about us.</span>
              </motion.h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="collapse collapse-arrow bg-white border border-slate-100 rounded-[1.5rem] shadow-sm group hover:border-amber-400/50 transition-all duration-300"
                >
                  <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
                  
                  <div className="collapse-title text-lg font-black text-slate-900 uppercase italic tracking-tight flex items-center gap-4">
                    <span className="text-amber-500 font-mono text-sm">0{index + 1}</span>
                    {faq.question}
                  </div>

                  <div className="collapse-content">
                    <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;