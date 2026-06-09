import { useState } from 'react';
import { ArrowRight, Clock, ShieldCheck, DollarSign, X, Sparkles, Activity, Shield, Sun, Smile, Scissors, Heart, Square, Smile as DentistryIcon, Layers, Orbit } from 'lucide-react';
import { TREATMENTS } from '../data';
import { Treatment } from '../types';

export default function SignatureTreatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Map icons dynamically to services for professional clinical visualization
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'smile-makeovers':
        return <Sparkles className="w-6 h-6 text-[#4CA7D8]" />;
      case 'dental-implants':
        return <Shield className="w-6 h-6 text-[#2B7DBD]" />;
      case 'root-canal':
        return <Activity className="w-6 h-6 text-[#2B7DBD]" />;
      case 'teeth-whitening':
        return <Sun className="w-6 h-6 text-[#4CA7D8]" />;
      case 'dentures':
        return <DentistryIcon className="w-6 h-6 text-[#2B7DBD]" />;
      case 'braces-aligners':
        return <GridIcon className="w-6 h-6 text-[#4CA7D8]" />;
      default:
        return <Heart className="w-6 h-6 text-[#2B7DBD]" />;
    }
  };

  return (
    <section
      id="signature-treatments"
      className="py-20 md:py-28 bg-[#EAF6FC] relative overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block mb-3">
            Pristine Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Our Clinical Specializations
          </h2>
          <div className="w-16 h-[3px] bg-[#4CA7D8] mx-auto mt-4 rounded-full" />
          <p className="text-[#1E293B]/70 text-sm md:text-base leading-relaxed mt-4">
            Combining meticulous technique with exceptional technology to provide durable, healthy treatments for patients of all ages.
          </p>
        </div>

        {/* Dynamic Service Grid (7 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => setSelectedTreatment(treatment)}
              className="bg-white p-8 rounded-md border border-[#1E293B]/10 hover:border-[#4CA7D8] shadow-sm hover:shadow-md group transition-all duration-300 cursor-pointer flex flex-col justify-between h-[300px]"
            >
              <div>
                {/* Header Icon + ID tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-md bg-[#F8FCFE] border border-[#4CA7D8]/10 flex items-center justify-center shrink-0">
                    {getServiceIcon(treatment.id)}
                  </div>
                  <span className="font-mono text-[9px] text-[#1E293B]/40 tracking-wider font-bold uppercase py-1 px-2.2 bg-[#F8FCFE] border border-[#1E293B]/5 rounded-sm">
                    Medical File
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B] mb-3 group-hover:text-[#2B7DBD] transition-colors duration-200">
                  {treatment.title}
                </h3>

                {/* Short Description */}
                <p className="text-[#1E293B]/70 text-sm leading-relaxed line-clamp-3">
                  {treatment.description}
                </p>
              </div>

              {/* Bottom Interactive Trigger Area */}
              <div className="flex items-center justify-between border-t border-[#1E293B]/5 pt-4 mt-4">
                <span className="font-mono text-[10px] tracking-wider text-[#2B7DBD] group-hover:text-[#4CA7D8] uppercase font-bold flex items-center gap-1.5 transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] uppercase font-mono text-[#1E293B]/40 font-semibold">
                  View Specs
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Modal (Controlled by clicking cards) */}
        {selectedTreatment && (
          <div
            id="treatment-detail-modal"
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-all duration-300"
            onClick={() => setSelectedTreatment(null)}
          >
            <div
              className="bg-[#F8FCFE] rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative border border-[#1E293B]/10 animate-in fade-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner image with subtle medical overlay */}
              <div className="relative h-60 w-full">
                <img
                  src={selectedTreatment.imageUrl}
                  alt={selectedTreatment.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-8 right-8 text-white">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#4CA7D8] uppercase block mb-1 font-bold">
                    Interactive Service Specifications
                  </span>
                  <h3 className="font-serif text-3xl font-bold">
                    {selectedTreatment.title}
                  </h3>
                </div>
              </div>

              {/* Inside details */}
              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#2B7DBD] uppercase tracking-widest mb-3">
                    The Pristine Clinical Approach
                  </h4>
                  <p className="text-[#1E293B]/85 text-sm md:text-base leading-relaxed">
                    {selectedTreatment.fullDetails}
                  </p>
                </div>

                {/* Technical data metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-[#1E293B]/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] tracking-wide text-[#1E293B]/50 uppercase">Treatment Time</span>
                      <span className="text-xs font-bold text-[#1E293B]">{selectedTreatment.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] tracking-wide text-[#1E293B]/50 uppercase">Clinical Value</span>
                      <span className="text-xs font-bold text-[#1E293B]">{selectedTreatment.benefit}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD]">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] tracking-wide text-[#1E293B]/50 uppercase">Pricing Guideline</span>
                      <span className="text-xs font-bold text-[#1E293B]">{selectedTreatment.costEstimate}</span>
                    </div>
                  </div>
                </div>

                {/* Appointment redirection CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <p className="text-xs text-[#1E293B]/50 max-w-[280px]">
                    Estimates are transparent. Walk in or schedule a detailed jaw analysis with Dr. Shetty.
                  </p>
                  <a
                    href="#appointment"
                    onClick={() => setSelectedTreatment(null)}
                    className="w-full sm:w-auto bg-[#2B7DBD] text-white text-center hover:bg-[#1f5f94] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md shadow-sm transition-all duration-200"
                  >
                    Request Smile Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Inline aligned mesh grid wireframe teeth-icon representation
function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v18H3z" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );
}
