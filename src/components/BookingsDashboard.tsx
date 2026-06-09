import { useState, useEffect } from 'react';
import { Calendar, X, Trash2, ShieldCheck, CheckSquare, Clock } from 'lucide-react';
import { Booking } from '../types';

interface BookingsDashboardProps {
  updateTrigger: number;
}

export default function BookingsDashboard({ updateTrigger }: BookingsDashboardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = () => {
      const saved = localStorage.getItem('pristine_bookings');
      if (saved) {
        setBookings(JSON.parse(saved));
      }
    };
    fetchBookings();
  }, [updateTrigger, isOpen]);

  const removeBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('pristine_bookings', JSON.stringify(updated));
  };

  const cancelBookingStatus = (id: string) => {
    const updated = bookings.map((b) => {
      if (b.id === id) {
        return { ...b, status: 'cancelled' as const };
      }
      return b;
    });
    setBookings(updated);
    localStorage.setItem('pristine_bookings', JSON.stringify(updated));
  };

  const getStatusStyle = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-[#C5A25D]/15 text-brand-gold font-bold';
    }
  };

  return (
    <>
      {/* Floating Widget Trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2">
        <button
          id="bookings-widget-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-green hover:bg-[#1a6e5b] text-[#FAF8F5] p-3.5 rounded-full shadow-2xl flex items-center space-x-2 border border-brand-gold/25 cursor-pointer hover:scale-105 transition-all text-sm font-medium font-mono uppercase tracking-wider relative group"
        >
          <Calendar className="w-5 h-5 text-brand-gold" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-300 block whitespace-nowrap">
            My Bookings
          </span>
          {bookings.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-text text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF8F5]">
              {bookings.length}
            </span>
          )}
        </button>
      </div>

      {/* Floating Slide Panel */}
      {isOpen && (
        <div
          id="bookings-slide-panel"
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex justify-end"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl border-l border-[#0F5B4A]/10 p-6 md:p-8 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel Header */}
            <div>
              <div className="flex items-center justify-between border-b border-brand-green/10 pb-4 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-green flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#C5A25D]" />
                    Your Scheduled Visits
                  </h3>
                  <p className="text-xs text-brand-text/50 font-sans mt-0.5">
                    Persistent overview of appointments requested in this browser session.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-brand-text transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Bookings List */}
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {bookings.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <Clock className="w-10 h-10 text-brand-gold/30 mx-auto" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-brand-text/80">No visits scheduled yet</h4>
                      <p className="text-[11px] text-brand-text/50 max-w-[200px] mx-auto mt-1">
                        Request a booking using our luxury form. They will appear here immediately!
                      </p>
                    </div>
                  </div>
                ) : (
                  bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white p-5 rounded-2xl border border-brand-green/5 shadow-sm space-y-3 relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase mb-1.5 shadow-xs bg-brand-green/5 text-brand-green">
                            {booking.treatment}
                          </span>
                          <h4 className="font-serif text-base font-bold text-brand-text">{booking.name}</h4>
                          <p className="text-xs text-brand-text/50 font-mono mt-0.5">ID: {booking.id}</p>
                        </div>
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${getStatusStyle(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-brand-green/5 text-xs text-brand-text/70">
                        <div>
                          <span className="block text-[9px] text-brand-text/40 font-mono uppercase">Request Date</span>
                          <span className="font-serif font-bold">{booking.date}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] text-brand-text/40 font-mono uppercase">Time Slot</span>
                          <span className="font-serif font-bold truncate block">{booking.time}</span>
                        </div>
                      </div>

                      {booking.notes && (
                        <p className="text-[11px] text-brand-text/60 italic bg-[#FAF8F5] p-2 rounded">
                          "{booking.notes}"
                        </p>
                      )}

                      {/* Management actions */}
                      <div className="flex justify-between items-center pt-2 gap-2 border-t border-brand-green/5">
                        {booking.status !== 'cancelled' ? (
                          <button
                            onClick={() => cancelBookingStatus(booking.id)}
                            className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 hover:text-red-800 transition-colors"
                          >
                            Cancel Slot
                          </button>
                        ) : (
                          <span className="text-[9px] font-mono text-red-700 font-bold uppercase">Cancelled</span>
                        )}
                        <button
                          onClick={() => removeBooking(booking.id)}
                          className="text-[10px] font-mono text-gray-400 hover:text-red-600 transition-colors flex items-center gap-1.5"
                          title="Delete from list"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Clear Record</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Bottom Brand Promise banner */}
            <div className="bg-[#0F5B4A]/5 p-4 rounded-xl border border-brand-green/10 text-center">
              <p className="text-[10px] md:text-xs text-brand-green font-mono leading-relaxed flex items-center justify-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                Clinic Admin System Connected.
              </p>
              <p className="text-[9px] text-brand-text/50 font-sans mt-0.5">
                Our front desk will contact you at your submitted phone within 15 minutes of operating hours.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
