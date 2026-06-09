import { useState, FormEvent } from 'react';
import { Phone, Calendar, ArrowRight, CheckCircle, Loader2, MessageSquare } from 'lucide-react';
import { TREATMENTS } from '../data';
import { Booking } from '../types';

interface AppointmentFormProps {
  onBookingAdded: () => void;
}

export default function AppointmentForm({ onBookingAdded }: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState('smile-makeovers');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<Booking | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) return;

    setIsSubmitting(true);
    
    // Simulate a pristine clinical delay
    setTimeout(() => {
      const newBooking: Booking = {
        id: 'bk-' + Math.random().toString(36).substr(2, 9),
        name,
        phone,
        email,
        treatment: TREATMENTS.find(t => t.id === treatment)?.title || treatment,
        date,
        time,
        notes,
        createdAt: new Date().toISOString(),
        status: 'pending'
      };

      // Retrieve existing and persist
      const existing = localStorage.getItem('pristine_bookings');
      const bookingsArray = existing ? JSON.parse(existing) : [];
      bookingsArray.unshift(newBooking);
      localStorage.setItem('pristine_bookings', JSON.stringify(bookingsArray));

      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData(newBooking);

      // Trigger app state reload to show update on dashboard
      onBookingAdded();

      // Clear input fields
      setName('');
      setPhone('');
      setEmail('');
      setTreatment('smile-makeovers');
      setDate('');
      setTime('');
      setNotes('');
    }, 1200);
  };

  // WhatsApp click handler
  const triggerWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Pristine Dental Care! I would like to schedule a dental checkup / consultation with Dr. Shivanand Shetty."
    );
    window.open(`https://wa.me/917506946933?text=${text}`, '_blank');
  };

  return (
    <section
      id="appointment"
      className="py-20 md:py-28 bg-white relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Hospitality contact details & Promise */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block">
                Begin Your Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
                Your Healthiest <span className="text-[#2B7DBD] block mt-1">Smile Starts Here</span>
              </h2>
              <p className="text-[#1E293B]/70 text-sm md:text-base leading-relaxed font-sans">
                Schedule your comprehensive oral review or specific signature dental treatment using our secured reservation tool. Or tap and chat live with our patient coordinator.
              </p>
            </div>

            {/* Quick response touch points */}
            <div className="space-y-4 my-8">
              {/* Phone block */}
              <a
                href="tel:+917506946933"
                className="flex items-center p-5 rounded-md bg-[#F8FCFE] border border-[#1E293B]/10 hover:border-[#4CA7D8] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-md bg-[#2B7DBD] text-white flex items-center justify-center shrink-0 mr-4 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] tracking-wide text-[#1E293B]/50 uppercase">Instant Call Line</span>
                  <span className="font-serif text-base font-bold text-[#2B7DBD] transition-colors duration-200">+91 75069 46933</span>
                </div>
              </a>

              {/* WhatsApp Block */}
              <button
                onClick={triggerWhatsApp}
                className="w-full flex items-center text-left p-5 rounded-md bg-emerald-50/50 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0 mr-4 shadow-xs">
                  <MessageSquare className="w-5 h-5 fill-white/10" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] tracking-wide text-[#1E293B]/50 uppercase">WhatsApp Inquiry</span>
                  <span className="font-serif text-base font-bold text-emerald-800">Chat with Frontdesk</span>
                </div>
              </button>
            </div>

            {/* Working Timings */}
            <div className="border-t border-[#1E293B]/5 pt-6 text-[#1E293B]/60 text-[11px] space-y-1.5 font-mono">
              <p className="font-bold text-[#2B7DBD] uppercase tracking-wider">Clinic Working Hours:</p>
              <p>Monday — Saturday: 10:00 AM — 1:30 PM, 5:00 PM — 9:00 PM</p>
              <p>Sundays: Prior appointment only • Advanced sanitizations conducted daily</p>
            </div>
          </div>

          {/* Right Column: Reservation Form Block */}
          <div className="lg:col-span-7 bg-[#F8FCFE] p-8 md:p-10 rounded-md border border-[#1E293B]/10 shadow-xs flex flex-col justify-center">
            
            {isSuccess ? (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-[#2B7DBD]/10 text-[#2B7DBD] rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#2B7DBD] uppercase block mb-1 font-bold">
                    Booking Request Sent
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                    Thank You, {submittedData?.name}
                  </h3>
                  <p className="text-[#1E293B]/70 text-sm max-w-sm mx-auto mt-2 font-sans">
                    We received your slot request for <strong className="text-[#2B7DBD]">{submittedData?.treatment}</strong> on <strong className="text-[#2B7DBD]">{submittedData?.date}</strong>. Our medical desk will confirm shortly.
                  </p>
                </div>

                <div className="bg-white border border-[#1E293B]/10 p-5 rounded-md max-w-sm mx-auto text-left text-xs font-mono text-[#1E293B]/70 space-y-2">
                  <p className="font-semibold text-sm text-[#2B7DBD] mb-2 font-serif">✓ Ref ID: {submittedData?.id}</p>
                  <p><strong>Treatment:</strong> {submittedData?.treatment}</p>
                  <p><strong>Proposed Timing:</strong> {submittedData?.date} • {submittedData?.time}</p>
                  <p><strong>Mobile Contact:</strong> {submittedData?.phone}</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#2B7DBD] text-white hover:bg-[#1f5f94] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    Submit Another Schedule
                  </button>
                  <button
                    onClick={triggerWhatsApp}
                    className="border border-[#1E293B]/20 hover:bg-emerald-50 text-emerald-800 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Confirmed Slot</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                    Schedule Your Consultation
                  </h3>
                  <p className="text-xs text-[#1E293B]/50 font-sans mt-0.5">
                    Inputs marked with * are strictly required.
                  </p>
                </div>

                {/* Patient Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="patient-name" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Navneet Palav"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all text-[#1E293B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="patient-phone" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 75069 46933"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all text-[#1E293B]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="patient-email" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="patient-email"
                    type="email"
                    placeholder="e.g. hello@patient.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all text-[#1E293B]"
                  />
                </div>

                {/* Treatment / Service selection */}
                <div>
                  <label htmlFor="treatment-type" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                    Signature Treatment Required
                  </label>
                  <select
                    id="treatment-type"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all appearance-none cursor-pointer text-[#1E293B]"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferable Date & Timeslot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferred-date" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all cursor-pointer text-[#1E293B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferred-time" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="preferred-time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all cursor-pointer text-[#1E293B]"
                    >
                      <option value="">Select a slot...</option>
                      <option value="Morning: 10:00 AM - 11:30 AM">Morning: 10:00 AM - 11:30 AM</option>
                      <option value="Noon: 12:00 PM - 01:30 PM">Noon: 12:00 PM - 01:30 PM</option>
                      <option value="Evening: 05:00 PM - 07:00 PM">Evening: 05:00 PM - 07:00 PM</option>
                      <option value="Night: 07:30 PM - 09:00 PM">Night: 07:30 PM - 09:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Extra Notes */}
                <div>
                  <label htmlFor="clinical-notes" className="block text-[10px] font-mono font-bold tracking-wider text-[#2B7DBD] uppercase mb-2">
                    Message / Clinical Concerns <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="clinical-notes"
                    rows={3}
                    placeholder="Briefly explain your concern (e.g. veneers, smile consultation, painful root canal, routine scaling clean)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-[#1E293B]/15 focus:border-[#4CA7D8] focus:ring-1 focus:ring-[#4CA7D8] font-sans text-sm outline-none px-4 py-3 rounded-md transition-all resize-none text-[#1E293B]"
                  />
                </div>

                {/* Large CTA Button: Book Your Appointment */}
                <button
                  id="submit-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B7DBD] text-white hover:bg-[#1f5f94] disabled:bg-[#2B7DBD]/50 text-xs font-bold tracking-widest uppercase py-4 rounded-md shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Your Appointment</span>
                      <ArrowRight className="w-4 h-4 text-[#4CA7D8]" />
                    </>
                  )}
                </button>
              </form>
            )}
            
          </div>

        </div>
      </div>
    </section>
  );
}
