import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Philosophy', href: '#why-trust' },
    { label: 'Dr. Shetty', href: '#meet-doctor' },
    { label: 'Treatments', href: '#signature-treatments' },
    { label: 'Experience', href: '#clinic-experience' },
    { label: 'Reviews', href: '#patient-stories' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollActive
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-primary/10 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - Geometric Balance Theme adapted to Clinical Colors */}
        <a href="#" className="flex items-center gap-3 select-none group">
          <div className="w-10 h-10 bg-[#2B7DBD] rounded-full flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-sm">
            <span className="text-white font-serif text-xl italic font-bold">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium tracking-tight uppercase text-brand-text font-serif">
              Pristine <span className="text-[#2B7DBD] font-bold">Dental Care</span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-[#4CA7D8] uppercase -mt-0.5 font-semibold">
              Vasai West • Dr. Shetty
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-text/80 hover:text-[#2B7DBD] transition-colors duration-200 relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2B7DBD] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+917506946933"
            id="nav-call-btn"
            className="flex items-center text-sm font-medium text-[#2B7DBD] hover:text-[#4CA7D8] border border-[#2B7DBD]/20 px-4 py-2.5 rounded-md transition-colors duration-200 bg-white shadow-xs"
          >
            <Phone className="w-4 h-4 mr-2 text-[#4CA7D8]" />
            +91 75069 46933
          </a>
          <button
            id="nav-book-btn"
            onClick={onOpenBooking}
            className="bg-[#2B7DBD] hover:bg-[#1f5f94] text-white text-sm font-medium px-6 py-2.5 rounded-md shadow-sm transition-all duration-200 active:scale-95"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-trigger"
          className="lg:hidden p-2 text-[#2B7DBD] hover:text-[#4CA7D8] transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        id="mobile-nav-menu"
        className={`fixed inset-0 top-[73px] bg-[#FAF8F5] z-40 lg:hidden transition-all duration-300 transform border-t border-[#0F5B4A]/10 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl font-semibold text-brand-text hover:text-[#2B7DBD] transition-colors duration-200 border-b border-gray-100 pb-3"
            >
              {item.label}
            </a>
          ))}

          <div className="flex flex-col space-y-4 pt-6">
            <a
              href="tel:+917506946933"
              id="mobile-nav-call"
              className="flex items-center justify-center text-[#2B7DBD] border border-[#2B7DBD]/30 py-3.5 rounded-md font-medium transition-colors duration-200 hover:bg-[#2B7DBD]/5"
            >
              <Phone className="w-4 h-4 mr-2 text-[#4CA7D8]" />
              Call Now: +91 75069 46933
            </a>
            <button
              id="mobile-nav-book"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-[#2B7DBD] text-white text-center py-3.5 rounded-md font-medium shadow-sm hover:bg-[#1f5f94] transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
