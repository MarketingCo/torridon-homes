'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Magnetic from './Magnetic';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-50/50 -skew-x-12 translate-x-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="w-24 h-[1px] bg-torridon-gold mb-6" />
            <h2 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 leading-tight italic">The Enquiry <br />Engine.</h2>
            <p className="text-[#1a1a1a]/60 text-lg font-sans mb-12 leading-relaxed max-w-md">
              Whether you are proposing a land deal, a joint venture, or a future home purchase, our executive team handles every enquiry with absolute discretion and precision.
            </p>
            
            <div className="space-y-10">
              <div className="group cursor-none flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-torridon-gold/20 flex items-center justify-center text-torridon-gold group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-[#1a1a1a] text-xl italic">Executive Email</h4>
                  <a href="mailto:hello@torridon-homes.co.uk" className="text-[#1a1a1a]/40 text-sm font-sans tracking-widest hover:text-torridon-gold transition-colors">hello@torridon-homes.co.uk</a>
                </div>
              </div>
              
              <div className="group cursor-none flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-torridon-gold/20 flex items-center justify-center text-torridon-gold group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-[#1a1a1a] text-xl italic">Direct Line</h4>
                  <a href="tel:+441315550123" className="text-[#1a1a1a]/40 text-sm font-sans tracking-widest hover:text-torridon-gold transition-colors">0131 555 0123</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 2 }}
                  className="bg-[#f9f9f7] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] rounded-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-torridon-gold/5 pointer-events-none" />
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium tracking-wide text-[#1a1a1a]/40 ml-1">Nature of Enquiry</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['Land Deal', 'Joint Venture', 'Home Sales', 'General'].map((type) => (
                          <button 
                            key={type}
                            type="button"
                            className="py-4 px-6 border border-[#1a1a1a]/10 text-sm font-medium tracking-wide text-[#1a1a1a] hover:border-torridon-gold hover:bg-white transition-all"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-[#1a1a1a]/5">
                      <input 
                        type="text" 
                        aria-label="Full Name" placeholder="Full Name"
                        className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-4 focus:border-torridon-gold outline-none transition-colors font-serif text-xl placeholder:text-[#1a1a1a]/20"
                        required
                      />
                      <input 
                        type="email" 
                        aria-label="Professional Email" placeholder="Professional Email"
                        className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-4 focus:border-torridon-gold outline-none transition-colors font-serif text-xl placeholder:text-[#1a1a1a]/20"
                        required
                      />
                      <textarea 
                        rows={3} 
                        aria-label="Brief Project Overview" placeholder="Brief Project Overview"
                        className="w-full bg-transparent border-b border-torridon-green/10 py-4 focus:border-torridon-gold outline-none transition-colors font-serif text-xl placeholder:text-torridon-green/20 resize-none"
                      />
                    </div>
                    
                    <Magnetic>
                      <button 
                        type="submit"
                        className="w-full py-6 bg-[#1a1a1a] text-white font-sans text-sm font-medium tracking-wide hover:bg-torridon-gold transition-all duration-500 flex items-center justify-center gap-4 shadow-xl"
                      >
                        Initialize Dialogue <ArrowRight size={14} />
                      </button>
                    </Magnetic>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#1a1a1a] p-16 md:p-24 text-center text-white rounded-sm shadow-2xl"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-torridon-gold rounded-full flex items-center justify-center mx-auto mb-10"
                  >
                    <CheckCircle2 size={40} className="text-[#1a1a1a]" />
                  </motion.div>
                  <h3 className="text-3xl font-serif italic mb-6">Dialogue Initialized.</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs mx-auto mb-10">
                    Your enquiry has been routed to our executive team. Expect a response within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-medium tracking-wide text-torridon-gold hover:text-white transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
