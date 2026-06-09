import { useState, useEffect } from 'react';
import { Phone, Calendar, Check } from 'lucide-react';
import { GOOGLE_DRIVE_PHOTOS } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Slideshow of real authentic clinic photos to maximize trust
  const slides = [
    {
      url: GOOGLE_DRIVE_PHOTOS.doctorOperating,
      caption: 'Advanced computerized root canal treatment by Dr. Shetty',
    },
    {
      url: GOOGLE_DRIVE_PHOTOS.clinicEntrance,
      caption: 'Welcome to Pristine Dental Care — Vasai West',
    },
    {
      url: GOOGLE_DRIVE_PHOTOS.doctorUniform,
      caption: 'Our modern, hygienic clinic environment',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="hero"
      className="relative w-full pt-28 pb-16 px-6 md:px-12 lg:px-20 bg-[#F8FCFE] flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-8">
        
        {/* Left Column: Headline and Trust-Builders */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EAF6FC] border border-[#4CA7D8]/20 px-3.5 py-1.5 rounded-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2B7DBD]" />
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#2B7DBD] uppercase">
              10+ Years of Clinical Excellence
            </span>
          </div>

          {/* Large Elegant Heading in Playfair Display */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E293B] leading-[1.12] mb-6">
            Advanced Dental Care <span className="text-[#2B7DBD] block mt-1">in Vasai West</span>
          </h1>

          {/* Readable body description */}
          <p className="text-base sm:text-lg text-[#1E293B]/80 leading-relaxed font-sans max-w-xl mb-8">
            Providing modern dental treatments, smile makeovers, implants and preventive care in a comfortable and hygienic environment.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              id="hero-book-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#2B7DBD] hover:bg-[#1f5f94] text-white text-base font-semibold px-8 py-3.5 rounded-md shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
            <a
              href="tel:+917506946933"
              id="hero-call-btn"
              className="w-full sm:w-auto flex items-center justify-center border border-[#2B7DBD]/30 text-[#2B7DBD] hover:bg-[#EAF6FC] text-base font-semibold px-8 py-3.5 rounded-md transition-all duration-200 bg-white"
            >
              <Phone className="w-5 h-5 mr-2 text-[#4CA7D8]" />
              Call Clinic
            </a>
          </div>

          {/* Trust points list to double-down on medical professionalism */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#1E293B]/10 pt-8">
            <div className="flex items-center gap-3 text-sm text-[#1E293B]/85">
              <div className="w-5 h-5 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3px]" />
              </div>
              <span className="font-medium">Experienced Specialist</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#1E293B]/85">
              <div className="w-5 h-5 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3px]" />
              </div>
              <span className="font-medium">Modern Equipment</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#1E293B]/85">
              <div className="w-5 h-5 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3px]" />
              </div>
              <span className="font-medium">Comfortable Treatment Experience</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#1E293B]/85">
              <div className="w-5 h-5 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3px]" />
              </div>
              <span className="font-medium">Patient-Focused Care</span>
            </div>
          </div>
        </div>

        {/* Right Column: Autoplay Clinic Image Slideshow */}
        <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-[#1E293B]/10 bg-white shadow-md">
          {slides.map((slide, idx) => (
            <div
              key={slide.url}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === activeSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                }}
              />
              {/* Subtle Overlay gradient — maximum 5% opacity or very subtle bottom tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              
              {/* Slideshow text caption at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/40 backdrop-blur-xs text-white">
                <p className="text-xs sm:text-sm font-medium tracking-wide">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlide ? 'bg-white scale-110 w-5' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
