import { Heart, Landmark, Phone, ArrowUp, Calendar, MessageSquare, Star } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'Smile Makeovers', href: '#signature-treatments' },
    { label: 'Dental Implants', href: '#signature-treatments' },
    { label: 'Root Canal Treatment', href: '#signature-treatments' },
    { label: 'Teeth Whitening', href: '#signature-treatments' },
    { label: 'Dentures', href: '#signature-treatments' },
    { label: 'Braces & Aligners', href: '#signature-treatments' },
    { label: 'General Dentistry', href: '#signature-treatments' }
  ];

  return (
    <>
      <footer className="bg-slate-900 text-[#F8FCFE] relative overflow-hidden pt-16 pb-24 lg:pb-12 border-t border-[#1E293B]/20">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/5">
            
            {/* Column 1: Brand & rating summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex flex-col select-none">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  PRISTINE
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#4CA7D8] uppercase -mt-1 font-semibold">
                  Dental Care • Vasai West
                </span>
              </div>
              
              <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-sm font-sans">
                Pristine Dental Care has been the leading clinical family dentist in Vasai West, Maharashtra since 2014. Under MDS Prosthodontist Dr. Shivanand Shetty, we offer precise, gentle oral treatments, smile design, implants, and painless root canals.
              </p>

              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-md w-fit">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-mono text-xs text-white/80 font-bold">4.8 Rating • 26+ Verified Reviews</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold text-[#4CA7D8] uppercase tracking-widest">
                Our Services
              </h4>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#4CA7D8] text-xs transition-colors duration-200 block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Landmarks & Contact */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold text-[#4CA7D8] uppercase tracking-widest">
                Address & Navigation
              </h4>
              <div className="space-y-4 text-xs text-white/60 font-sans leading-relaxed">
                <p>
                  2/G-3 Apartment, Apna Ghar Society, <br />
                  Ambadi Road, Vasai West, <br />
                  Maharashtra 401202, India <br />
                  <span className="text-[#4CA7D8] font-medium block mt-1">✓ Beside Akshay Restaurant</span>
                  <span className="text-[#4CA7D8] font-medium block">✓ Opposite Lifeline Hospital</span>
                </p>
                
                <div className="flex items-center space-x-2 text-white/80 pt-2 border-t border-white/5">
                  <Phone className="w-3.5 h-3.5 text-[#4CA7D8]" />
                  <a href="tel:+917506946933" className="hover:underline font-mono">+91 75069 46933</a>
                </div>
              </div>
            </div>

            {/* Column 4: Founding Badge */}
            <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end">
              <div>
                <p className="font-mono text-[9px] text-[#4CA7D8] tracking-widest uppercase mb-1 font-bold">Trusted Since</p>
                <p className="font-serif text-4xl font-bold text-white/95">2014</p>
              </div>
              <button
                 onClick={scrollToTop}
                 className="mt-6 md:mt-0 bg-white/5 hover:bg-white/11 border border-white/10 p-2.5 rounded-md text-white cursor-pointer transition-colors"
                 aria-label="Scroll to top of page"
              >
                <ArrowUp className="w-5 h-5 text-[#4CA7D8]" />
              </button>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/45 font-sans gap-4">
            <p>© {currentYear} Pristine Dental Care • Vasai West. All Rights Reserved.</p>
            <div className="flex items-center space-x-1">
              <span>High-quality healthcare for Vasai families.</span>
              <Heart className="w-3 h-3 text-[#4CA7D8] fill-[#4CA7D8]" />
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE PERSISTENT FLOATING STICKY RESERVATION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F8FCFE]/95 backdrop-blur-md border-t border-[#1E293B]/10 p-4 shadow-xl flex items-center justify-between gap-4">
        <a
          href="tel:+917506946933"
          className="flex-1 flex items-center justify-center gap-1.5 border border-[#2B7DBD]/30 text-[#2B7DBD] py-2.5 rounded-md text-xs font-bold tracking-widest uppercase transition-all bg-white"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Desk</span>
        </a>
        <button
          onClick={onOpenBooking}
          className="flex-1 bg-[#2B7DBD] text-white py-2.5 rounded-md text-xs font-bold tracking-widest uppercase shadow-sm flex items-center justify-center gap-1.5 active:scale-98 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#4CA7D8]" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
}
