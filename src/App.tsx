import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reputation from './components/Reputation';
import WhyTrust from './components/WhyTrust';
import MeetDoctor from './components/MeetDoctor';
import SignatureTreatments from './components/SignatureTreatments';
import ClinicExperience from './components/ClinicExperience';
import SocialProof from './components/SocialProof';
import GoogleReviews from './components/GoogleReviews';
import AppointmentForm from './components/AppointmentForm';
import LocationSection from './components/LocationSection';
import BookingsDashboard from './components/BookingsDashboard';
import Footer from './components/Footer';
import { MessageSquare, ArrowUp, Calendar } from 'lucide-react';

export default function App() {
  // Synchronizes persistent bookings changes to refresh the floating dashboard
  const [bookingUpdateTrigger, setBookingUpdateTrigger] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Dynamic reveal-on-scroll animations for high-end feel
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active'); // allow re-trigger on enter/leave
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial trigger to compute position of above-fold elements
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingAdded = () => {
    setBookingUpdateTrigger((prev) => prev + 1);
  };

  const handleOpenBookingSection = () => {
    const section = document.getElementById('appointment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-filled WhatsApp direct chat link
  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Pristine Dental Care! I'm visiting your website and I'd like to schedule a dental consultation / smile makeover review."
    );
    window.open(`https://wa.me/917506946933?text=${text}`, '_blank');
  };

  return (
    <div id="pristine-dental-app" className="relative min-h-screen bg-[#F8FCFE] text-[#1E293B]">
      
      {/* 1. Transparent Floating Navigation */}
      <Navbar onOpenBooking={handleOpenBookingSection} />

      {/* Main Container Flow */}
      <main id="main-content">
        
        {/* SECTION 1 - Hero Section (Visual display, rated standards, CTAs) */}
        <Hero onOpenBooking={handleOpenBookingSection} />

        {/* SECTION 2 - Credibility Strip */}
        <div className="reveal-on-scroll">
          <Reputation />
        </div>

        {/* SECTION 3 - Meet Dr. Shivanand Shetty */}
        <div className="reveal-on-scroll">
          <MeetDoctor />
        </div>

        {/* SECTION 4 - Signature Treatments (7 custom cards Services Section) */}
        <div className="reveal-on-scroll">
          <SignatureTreatments />
        </div>

        {/* SECTION 5 - Why Choose Pristine (6 cards trust section) */}
        <div className="reveal-on-scroll">
          <WhyTrust />
        </div>

        {/* SECTION 6 - Clinic Experience ("Inside Pristine Dental Care" Real Masonry Gallery) */}
        <div className="reveal-on-scroll">
          <ClinicExperience />
        </div>

        {/* SECTION 7 - Patient Experience (Split Layout) */}
        <div className="reveal-on-scroll">
          <SocialProof />
        </div>

        {/* SECTION 8 - Google Reviews */}
        <div className="reveal-on-scroll">
          <GoogleReviews />
        </div>

        {/* SECTION 9 - Appointment Form */}
        <div className="reveal-on-scroll">
          <AppointmentForm onBookingAdded={handleBookingAdded} />
        </div>

        {/* SECTION 10 - Location */}
        <div className="reveal-on-scroll">
          <LocationSection />
        </div>

      </main>

      {/* 2. Editorial SEO Footer with landmarks references */}
      <Footer onOpenBooking={handleOpenBookingSection} />

      {/* 3. Real-time Appointments Management Panel (Connected locally) */}
      <BookingsDashboard updateTrigger={bookingUpdateTrigger} />

      {/* FLOATING WHATSAPP BUTTON */}
      <button
        id="whatsapp-floating-widget"
        onClick={handleOpenWhatsApp}
        className="fixed bottom-24 sm:bottom-6 right-6 sm:right-24 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-3.5 rounded-full shadow-2xl z-40 transition-all duration-300 border border-white/20 flex items-center justify-center cursor-pointer"
        aria-label="Directly Chat on WhatsApp"
        title="Directly Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
      </button>

      {/* STICKY TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-36 sm:bottom-6 left-6 bg-[#F8FCFE]/90 hover:bg-white text-[#2B7DBD] border border-[#1E293B]/10 shadow-lg p-3 rounded-md z-40 transition-all duration-300 hover:-translate-y-1 active:scale-90 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#2B7DBD]" />
        </button>
      )}

    </div>
  );
}
