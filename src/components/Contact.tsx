'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-8 leading-tight">
              Let's Discuss Your <br />
              <span className="italic">Next Project.</span>
            </h2>
            <p className="text-torridon-green/60 text-lg font-sans mb-12 leading-relaxed">
              Whether you are a landowner, an investor, or a future homeowner, we would love to hear from you. Our team is ready to discuss new opportunities.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-torridon-gold/30 flex items-center justify-center text-torridon-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-torridon-green text-lg mb-1">Email Us</h4>
                  <p className="text-torridon-green/60 text-sm">hello@torridonhomes.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-torridon-gold/30 flex items-center justify-center text-torridon-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-torridon-green text-lg mb-1">Call Us</h4>
                  <p className="text-torridon-green/60 text-sm">0131 555 0123</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-torridon-gold/30 flex items-center justify-center text-torridon-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-torridon-green text-lg mb-1">Headquarters</h4>
                  <p className="text-torridon-green/60 text-sm">Central Belt, Scotland</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-torridon-cream p-8 md:p-12 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-torridon-gold/5 pointer-events-none" />
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-torridon-green/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Smith"
                    className="w-full bg-white border-b border-torridon-green/10 p-4 focus:border-torridon-gold outline-none transition-colors font-sans text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-torridon-green/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border-b border-torridon-green/10 p-4 focus:border-torridon-gold outline-none transition-colors font-sans text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-torridon-green/40 ml-1">Subject</label>
                <select className="w-full bg-white border-b border-torridon-green/10 p-4 focus:border-torridon-gold outline-none transition-colors font-sans text-sm appearance-none">
                  <option>Land Acquisition Inquiry</option>
                  <option>Joint Venture / Investment</option>
                  <option>Future Home Sales</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-torridon-green/40 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?"
                  className="w-full bg-white border-b border-torridon-green/10 p-4 focus:border-torridon-gold outline-none transition-colors font-sans text-sm resize-none"
                />
              </div>
              
              <button className="w-full py-5 bg-torridon-green text-white font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold hover:text-torridon-green transition-all duration-300 flex items-center justify-center gap-3">
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
