import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data';

export default function GoogleReviews() {
  return (
    <section
      id="patient-stories"
      className="py-20 md:py-28 bg-[#F8FCFE] relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block mb-3">
              Patient Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Patient Experiences
            </h2>
            <div className="w-16 h-[3px] bg-[#4CA7D8] mt-4 rounded-full" />
            <p className="text-[#1E293B]/70 text-sm md:text-base leading-relaxed mt-4">
              Real stories and feedback from patients who have trusted Dr. Shetty with their dental care in Vasai West.
            </p>
          </div>

          {/* Prominent Google Rating badge */}
          <div className="flex flex-col items-center md:items-end justify-center bg-white p-6 rounded-md border border-[#1E293B]/10 shadow-xs min-w-[240px]">
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <p className="text-2xl font-serif font-extrabold text-[#1E293B]">5.0 Star Rating</p>
            <p className="text-xs text-[#2B7DBD] font-mono tracking-wider uppercase font-semibold mt-1">
              26+ Google Verified Reviews
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-md border border-[#1E293B]/10 hover:border-[#4CA7D8] shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Score Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Body Quote */}
                <p className="text-[#1E293B]/80 text-sm leading-relaxed italic font-sans mb-6">
                  "{review.fullBody || review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-[#1E293B]/5 pt-4 mt-6">
                <p className="font-semibold text-sm text-[#1E293B]">{review.author}</p>
                <div className="flex items-center justify-between text-xs text-[#1E293B]/50 mt-1">
                  <span>{review.role || 'Verified Patient'}</span>
                  <span className="font-mono text-[10px]">{review.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Action */}
        <div className="text-center mt-12 bg-white/50 p-6 rounded-md border border-[#1E293B]/10 max-w-xl mx-auto">
          <p className="text-xs text-[#1E293B]/60 font-sans flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#2B7DBD]" />
            Satisfied with our treatment? Leave us a review on Google Business!
          </p>
        </div>

      </div>
    </section>
  );
}
