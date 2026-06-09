import { Check, ShieldAlert, BadgeCheck, Coffee, Sparkles, HeartHandshake, Syringe } from 'lucide-react';
import { GOOGLE_DRIVE_PHOTOS } from '../data';

export default function SocialProof() {
  return (
    <section
      id="patient-experience"
      className="py-20 md:py-28 bg-white relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Real Clinic Image representing pristine patient care */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-md overflow-hidden border border-[#1E293B]/10 p-2 bg-white shadow-sm">
              <img
                src={GOOGLE_DRIVE_PHOTOS.doctorOperating}
                alt="Patient experience inside Pristine Dental Care"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-sm hover:scale-[1.01] transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#2B7DBD]/95 text-white p-4 rounded-md">
                <p className="text-sm font-semibold font-serif italic text-white">"Exceptional hygiene, advanced instruments, and quiet care."</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/80 mt-1">— Modern Operatory Suite</p>
              </div>
            </div>

            {/* Design accents */}
            <div className="absolute -bottom-3 -left-3 w-1/3 h-1/3 bg-[#EAF6FC] rounded-md -z-0 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-1/3 h-1/3 border border-[#4CA7D8]/30 rounded-md -z-0 pointer-events-none" />
          </div>

          {/* Right Column: Narrative of Patient Experience with 4 core descriptors */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block mb-3">
              Patient Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight mb-6">
              Our Patient Experience
            </h2>
            <p className="text-[#1E293B]/80 text-sm md:text-base leading-relaxed mb-8">
              At Pristine Dental Care, we reject cold, clinical environments in favor of a warm, meticulously organized dental journey driven by deep patient comfort. Here is what defines your visit:
            </p>

            {/* Detailed Split Bullet Points */}
            <div className="space-y-6">
              
              {/* Point 1: Comfortable environment */}
              <div id="exp-comfort" className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#EAF6FC] border border-[#4CA7D8]/10 flex items-center justify-center text-[#2B7DBD] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1E293B]">Comfortable Environment</h3>
                  <p className="text-[#1E293B]/65 text-sm mt-0.5 font-sans">
                    A welcoming atmosphere designed with soft ambient lighting, calming neutral tones, and hospitable staff to eliminate typical dental anxiety.
                  </p>
                </div>
              </div>

              {/* Point 2: Hygienic treatment rooms */}
              <div id="exp-hygiene" className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#EAF6FC] border border-[#4CA7D8]/10 flex items-center justify-center text-[#2B7DBD] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1E293B]">Hygienic Treatment Rooms</h3>
                  <p className="text-[#1E293B]/65 text-sm mt-0.5 font-sans">
                    Sterilization safety protocols matching international parameters. Every single handpiece, tip, and sensor undergoes strict biochemical sanitization.
                  </p>
                </div>
              </div>

              {/* Point 3: Personalized care */}
              <div id="exp-personalized" className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#EAF6FC] border border-[#4CA7D8]/10 flex items-center justify-center text-[#2B7DBD] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1E293B]">Personalized Care</h3>
                  <p className="text-[#1E293B]/65 text-sm mt-0.5 font-sans">
                    Since no two smiles are identical, Dr. Shetty crafts customized treatment schedules aligned completely with your physiological parameters and pace.
                  </p>
                </div>
              </div>

              {/* Point 4: Modern dental procedures */}
              <div id="exp-procedures" className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#EAF6FC] border border-[#4CA7D8]/10 flex items-center justify-center text-[#2B7DBD] shrink-0">
                  <Syringe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1E293B]">Modern Dental Procedures</h3>
                  <p className="text-[#1E293B]/65 text-sm mt-0.5 font-sans">
                    Leveraging advanced computerized endodontic rotary units, lightweight composites, and high-definition smart diagnostic sensors for speedy visits.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
