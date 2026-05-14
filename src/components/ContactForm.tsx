'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Home, Compass, MapPin, Building } from 'lucide-react';

type Step = 1 | 2 | 3;

export default function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [state, handleSubmit] = useForm("xovjezno");
  const [selectedStage, setSelectedType] = useState('');

  const nextStep = () => setStep((prev) => (prev + 1) as Step);
  const prevStep = () => setStep((prev) => (prev - 1) as Step);

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-16 text-center bg-stone-50 border border-stone-100 rounded-sm"
      >
        <div className="w-20 h-20 bg-stone-900 text-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-serif italic mb-4 text-stone-900">Vision Brief Authenticated</h3>
        <p className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.4em] leading-relaxed max-sm mx-auto">
          Operational data received. Our development lead is reviewing your plot and architectural requirements. Response within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto text-left">
      <div className="flex justify-between items-center mb-12 border-stone-100 pb-8 border-b">
        <div className="flex gap-3">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`h-0.5 w-12 transition-all duration-700 ${step >= i ? 'bg-stone-900' : 'bg-stone-100'}`}
            />
          ))}
        </div>
        <span className="font-serif italic text-xs text-stone-300">Phase 0{step}</span>
      </div>

      <form onSubmit={handleSubmit} className="min-h-[480px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              <h4 className="text-3xl font-serif text-stone-900 leading-tight tracking-tighter">What is the status of your development?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'plot', name: 'Plot Secured', icon: <MapPin size={20} /> },
                  { id: 'planning', name: 'Planning Stage', icon: <Compass size={20} /> },
                  { id: 'architectural', name: 'Designs Ready', icon: <Building size={20} /> },
                  { id: 'build', name: 'Build Ready', icon: <Home size={20} /> },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => { setSelectedType(s.name); nextStep(); }}
                    className={`flex items-center gap-5 p-8 border transition-all duration-500 group ${
                      selectedStage === s.name ? 'border-stone-900 bg-stone-900 text-stone-50' : 'border-stone-100 bg-stone-50/50 hover:border-stone-300 text-stone-400'
                    }`}
                  >
                    <div className={`${selectedStage === s.name ? 'text-stone-50' : 'text-stone-200 group-hover:text-stone-900'} transition-colors`}>
                      {s.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-900">{s.name}</span>
                    <input type="hidden" name="project_stage" value={selectedStage} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <h4 className="text-3xl font-serif text-stone-900 tracking-tighter">Location & Vision</h4>
              <div className="space-y-10">
                <div>
                  <label htmlFor="location" className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Site Location / Postcode</label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    required
                    className="w-full bg-stone-50 border-stone-200 p-6 font-serif italic text-xl text-stone-900 focus:border-stone-900 outline-none transition-all placeholder:text-stone-200 border-b"
                    aria-label="e.g. Perthshire, East Lothian, etc." placeholder="e.g. Perthshire, East Lothian, etc."
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Projected Build Value</label>
                  <input
                    id="budget"
                    type="text"
                    name="budget"
                    className="w-full bg-stone-50 border-stone-200 p-6 font-serif italic text-xl text-stone-900 focus:border-stone-900 outline-none transition-all placeholder:text-stone-200 border-b"
                    aria-label="e.g. £500k - £1.5M..." placeholder="e.g. £500k - £1.5M..."
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-8">
                <button type="button" onClick={prevStep} className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-300 hover:text-stone-900 transition-colors">← Return</button>
                <button type="button" onClick={nextStep} className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 hover:text-stone-400 transition-colors">Continue →</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              <h4 className="text-3xl font-serif text-stone-900 tracking-tighter">Authentication</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label htmlFor="name" className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Lead Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-stone-50 border-stone-200 p-6 font-serif italic text-xl text-stone-900 focus:border-stone-900 outline-none transition-all border-b"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-stone-50 border-stone-200 p-6 font-serif italic text-xl text-stone-900 focus:border-stone-900 outline-none transition-all border-b"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] font-bold mt-2" />
                </div>
              </div>
              <div className="flex justify-between items-center pt-12">
                <button type="button" onClick={prevStep} className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-300 hover:text-stone-900 transition-colors">← Return</button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-stone-900 text-stone-50 px-16 py-7 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-stone-800 transition-all disabled:opacity-50 flex items-center gap-4 shadow-2xl"
                >
                  {state.submitting ? 'Authenticating...' : 'Transmit Vision Brief'}
                  <Send size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
