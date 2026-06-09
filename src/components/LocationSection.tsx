import { MapPin, Navigation, Compass, Landmark, ExternalLink, Phone, MessageSquare, Calendar } from 'lucide-react';

export default function LocationSection() {
  const addressString = "2/G-3 Apartment, Apna Ghar Society, Ambadi Road, Beside Akshay Restaurant, Opposite Lifeline Hospital, Vasai West, Maharashtra 401202";
  
  // Real coordinates link derived from pristine google maps listing
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent("Pristine Dental Care Ambadi Road Vasai West")}`;

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Pristine Dental Care! I'm visiting your website and I'd like to schedule a dental consultation / smile makeover review."
    );
    window.open(`https://wa.me/917506946933?text=${text}`, '_blank');
  };

  const handleOpenBookingSection = () => {
    const section = document.getElementById('appointment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="location"
      className="py-20 md:py-28 bg-[#F8FCFE] relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Landmark and Address references */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block">
                Find Your Way
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
                Our Clinic <span className="text-[#2B7DBD] block mt-1">In Vasai West</span>
              </h2>
              <p className="text-[#1E293B]/70 text-sm leading-relaxed font-sans">
                Centrally located on the main Ambadi Road of Vasai West. The clinic offers modern, hygienic treatment suites and easy ground-level parking adjacent to the facility.
              </p>
            </div>

            {/* Landmarks card with high-end clinical layout */}
            <div className="my-8 space-y-6 bg-white p-6 rounded-md border border-[#1E293B]/10 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#2B7DBD] mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#4CA7D8] shrink-0" />
                Key Navigation Landmarks
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#EAF6FC] text-[#2B7DBD] flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#1E293B]">Beside Akshay Restaurant</h4>
                    <p className="text-xs text-[#1E293B]/60 mt-0.5">A highly popular local dining landmark situated right next to Apna Ghar entry corridors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#1E293B]/5 pt-4">
                  <div className="w-6 h-6 rounded-md bg-[#EAF6FC] text-[#2B7DBD] flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#1E293B]">Opposite Lifeline Hospital</h4>
                    <p className="text-xs text-[#1E293B]/60 mt-0.5">Directly facing the clinic across Ambadi road, ensuring standard medical surroundings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#1E293B]/5 pt-4">
                  <div className="w-6 h-6 rounded-md bg-[#EAF6FC] text-[#2B7DBD] flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#1E293B]">Apna Ghar Society</h4>
                    <p className="text-xs text-[#1E293B]/60 mt-0.5">Located at Ground Floor, G-3 Apartment with absolute clean visual signage entrance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address and quick action links */}
            <div className="space-y-6 border-t border-[#1E293B]/10 pt-6">
              <div className="flex items-start gap-3 text-[#1E293B]">
                <MapPin className="w-5 h-5 text-[#4CA7D8] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1E293B]/70 leading-relaxed font-sans font-medium">
                  {addressString}
                </p>
              </div>

              {/* Grid of contact links: Call, WhatsApp, Direct Booking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+917506946933"
                  className="w-full flex items-center justify-center border border-[#2B7DBD]/30 text-[#2B7DBD] hover:bg-[#EAF6FC] text-xs font-bold tracking-widest uppercase py-3 rounded-md transition-all duration-200 bg-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Clinic
                </a>
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase py-3 rounded-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </button>
              </div>

              <div className="w-full">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#2B7DBD] hover:bg-[#1f5f94] text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded-md shadow-sm transition-all duration-200"
                >
                  <Navigation className="w-4 h-4 text-[#4CA7D8]" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 rounded-md overflow-hidden border border-[#1E293B]/10 bg-white shadow-sm relative min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
            {/* Embedded Live Google Maps for real client interaction */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.3418580006767!2d72.82582877583647!3d19.440788640398693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a92fb496739d%3A0xc6cb1e83dc79bb95!2sPristine%20Dental%20Care!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pristine Dental Care Google Map location"
            />
            
            {/* Elegant overlay watermark context */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-md border border-[#1E293B]/10 flex items-center justify-between shadow-sm pointer-events-none z-10">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#4CA7D8]" />
                <div>
                  <p className="text-xs font-serif font-bold text-[#2B7DBD]">Pristine Dental Care</p>
                  <p className="text-[10px] text-[#1E293B]/60 font-sans">Ground Floor, Apna Ghar Society, Vasai West</p>
                </div>
              </div>
              <span className="text-[9px] font-mono bg-[#EAF6FC] text-[#2B7DBD] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Live Coordinates
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
