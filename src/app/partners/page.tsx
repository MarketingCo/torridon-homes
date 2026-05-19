'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, BarChart3, PieChart, FileText, ArrowRight, UserCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Magnetic from '@/components/Magnetic';

const PartnerPortal = () => {
  return (
    <main className="min-h-screen bg-torridon-forest">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="w-24 h-[1px] bg-torridon-gold mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-torridon-serif text-white italic leading-tight mb-8">Partner <br />Portal.</h1>
            <div className="flex items-center justify-center gap-4 text-white/40 text-sm font-medium tracking-wide">
              <Lock size={12} className="text-torridon-gold" />
              <span>AES-256 Encrypted Protocol</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portal Interface Mockup */}
      <section className="pb-40 px-6 md:px-12 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-4"
            >
              <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-10 rounded-full bg-torridon-gold flex items-center justify-center text-torridon-forest font-bold">TH</div>
                  <div>
                    <div className="text-white font-torridon-serif italic text-sm">Partner Account</div>
                    <div className="text-sm font-medium tracking-wide text-white/40">Secure Access</div>
                  </div>
                </div>
                
                <nav className="space-y-6">
                  {[
                    { icon: BarChart3, label: 'Pipeline GDV' },
                    { icon: PieChart, label: 'Equity Allocation' },
                    { icon: FileText, label: 'Legal Vault' },
                    { icon: UserCheck, label: 'Investor Relations' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/40 hover:text-torridon-gold transition-colors cursor-pointer group" role="button" tabIndex={0}>
                      <item.icon size={18} />
                      <span className="text-sm font-medium tracking-wide">{item.label}</span>
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="lg:col-span-9"
            >
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-20 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 bg-torridon-gold text-torridon-forest text-sm font-medium tracking-wide">
                  Authorized Personnel Only
                </div>

                <div className="max-w-md">
                  <h2 className="text-4xl md:text-5xl font-torridon-serif text-white italic mb-8">Access the <br />Future Pipeline.</h2>
                  <p className="text-white/60 text-lg font-torridon-sans mb-12 leading-relaxed italic">
                    Log in to view real-time build progress, financial drawdowns, and upcoming land acquisition appraisals across the Central Belt.
                  </p>
                  
                  <form className="space-y-6 mb-12">
                    <input 
                      type="text" 
                      aria-label="Partner ID / Email" placeholder="Partner ID / Email"
                      className="w-full bg-white/5 border border-white/10 p-6 text-white outline-none focus:border-torridon-gold transition-all font-torridon-sans text-sm"
                    />
                    <div className="relative">
                      <input 
                        type="password" 
                        aria-label="Secure Key" placeholder="Secure Key"
                        className="w-full bg-white/5 border border-white/10 p-6 text-white outline-none focus:border-torridon-gold transition-all font-torridon-sans text-sm"
                      />
                      <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    </div>
                    <Magnetic>
                      <button className="w-full py-6 bg-white text-torridon-forest text-sm font-medium tracking-wide hover:bg-torridon-gold transition-all duration-500 shadow-2xl flex items-center justify-center gap-4">
                        Secure Authentication <ArrowRight size={14} />
                      </button>
                    </Magnetic>
                  </form>

                  <div className="pt-12 border-t border-white/10 grid grid-cols-2 gap-12">
                    <div>
                      <button className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-colors">Request Credentials</button>
                    </div>
                    <div>
                      <button className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-colors">Vault Assistance</button>
                    </div>
                  </div>
                </div>

                {/* Animated Background Pulse */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-torridon-gold/5 rounded-full blur-[100px] group-hover:bg-torridon-gold/10 transition-all duration-1000" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnerPortal;
