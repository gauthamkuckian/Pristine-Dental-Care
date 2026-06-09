import { Award, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { GOOGLE_DRIVE_PHOTOS } from '../data';

export default function MeetDoctor() {
  return (
    <section
      id="meet-doctor"
      className="py-20 md:py-28 bg-white relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Meticulous Doctor Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-md overflow-hidden border border-[#1E293B]/10 bg-white p-2 shadow-md">
              <img
                src={GOOGLE_DRIVE_PHOTOS.doctorProfile}
                alt="Dr. Shivanand G. Shetty"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] md:h-[550px] object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80';
                }}
              />
              {/* Image Description Shield Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xs p-4 rounded-md border border-[#2B7DBD]/20 shadow-sm">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#2B7DBD] uppercase font-bold block mb-1">
                  Principal Dentist
                </span>
                <p className="text-sm font-semibold text-[#1E293B]">Dr. Shivanand G. Shetty</p>
                <p className="text-xs text-[#1E293B]/60">BDS, MDS (Prosthodontics)</p>
              </div>
            </div>

            {/* Background design offsets */}
            <div className="absolute -top-3 -left-3 w-1/2 h-1/2 border border-[#4CA7D8]/30 rounded-md -z-0 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 bg-[#EAF6FC] rounded-md -z-0 pointer-events-none hidden sm:block" />

            {/* Experience Badge */}
            <div className="absolute top-6 -right-6 bg-white border border-[#2B7DBD]/20 shadow-md px-4 py-3 rounded-md z-20 flex items-center space-x-3 max-w-[200px] hidden sm:flex">
              <div className="w-9 h-9 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#4CA7D8] font-bold">Experience</p>
                <p className="font-serif text-xs font-bold text-[#1E293B]">10+ Years clinical</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Specialties */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block mb-3">
              About the Doctor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight mb-2">
              Meet Your Dentist
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#2B7DBD] font-serif">Dr. Shivanand G. Shetty</h3>
              <span className="text-xs bg-[#EAF6FC] text-[#2B7DBD] px-2.5 py-1 rounded-md font-semibold font-mono">BDS, MDS (Prosthodontics)</span>
            </div>

            {/* Highlight Paragraphs */}
            <div className="space-y-6 text-[#1E293B]/80 text-base leading-relaxed font-sans mb-8">
              <p>
                With over <strong className="text-brand-text font-bold">10 years of clinical practice</strong>, Dr. Shivanand G. Shetty represents a high standard of modern dentistry and prosthetic specialization in Vasai West. Reserving his care for meticulous patient comfort, his treatments are driven by deep medical expertise, transparent advice, and a completely stress-free clinical environment.
              </p>
              <p>
                As an <strong className="text-[#2B7DBD]">MDS specialized in Prosthodontics</strong>, Dr. Shetty possesses advanced training in replacing missing teeth, dental implants, complex full-mouth rehabilitation, cosmetic veneers, crown and bridge restorations, and advanced smile design engineering.
              </p>
              <p className="italic border-l-4 border-[#4CA7D8] pl-4 text-[#1E293B]/70 bg-[#F8FCFE] py-3 pr-4 rounded-r-md">
                "We design each treatment journey specifically around our patient's natural facial structure, individual concerns, and comfort. Transparency and cutting-edge sterilization are the pillars of what we do at Pristine."
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1E293B]/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#2B7DBD] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E293B]">Prosthodontic Specialization</h4>
                  <p className="text-xs text-[#1E293B]/60 mt-0.5">Advanced expertise in implants, dentures, crowns, and veneer restorations.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#2B7DBD] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E293B]">Patient-Centered Care</h4>
                  <p className="text-xs text-[#1E293B]/60 mt-0.5">Compassionate treatment planning focused on pain-free procedures.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#2B7DBD] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E293B]">Extensive Experience</h4>
                  <p className="text-xs text-[#1E293B]/60 mt-0.5">Over a decade of successful smile makeovers and dental therapies here in Vasai.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#2B7DBD] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E293B]">Modern Treatment Approach</h4>
                  <p className="text-xs text-[#1E293B]/60 mt-0.5">Utilizing modern rotary systems, digital diagnostics, and clean tools.</p>
                </div>
              </div>
            </div>

            {/* Elegant Calligraphic-style Signature block */}
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase font-mono tracking-wider text-[#1E293B]/40">Senior Consultant & Founder</p>
                <div className="font-serif italic text-2xl text-[#2B7DBD]/80 tracking-wider mt-1 select-none font-bold">
                  Dr. S. G. Shetty
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
