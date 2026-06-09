import { Award, Users, Star, Calendar } from 'lucide-react';

export default function Reputation() {
  return (
    <div
      id="credibility-strip"
      className="w-full bg-white border-y border-[#1E293B]/10 py-8 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
        
        {/* Item 1 */}
        <div id="cred-experience" className="flex items-center gap-4 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xl md:text-2xl font-serif font-extrabold text-[#1E293B]">10+ Years</p>
            <p className="text-xs md:text-sm text-[#1E293B]/60 font-medium">Experience</p>
          </div>
        </div>

        {/* Item 2 */}
        <div id="cred-patients" className="flex items-center gap-4 justify-center border-l-0 md:border-l border-[#1E293B]/10 md:pl-8">
          <div className="w-12 h-12 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2B7DBD] shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xl md:text-2xl font-serif font-extrabold text-[#1E293B]">5000+</p>
            <p className="text-xs md:text-sm text-[#1E293B]/60 font-medium">Patients Treated</p>
          </div>
        </div>

        {/* Item 3 */}
        <div id="cred-reviews" className="flex items-center gap-4 justify-center border-l-0 md:border-l border-[#1E293B]/10 md:pl-8">
          <div className="w-12 h-12 rounded-md bg-[#EAF6FC] flex items-center justify-center text-amber-400 shrink-0">
            <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <p className="text-xl md:text-2xl font-serif font-extrabold text-[#1E293B]">26+ Google</p>
            <p className="text-xs md:text-sm text-[#1E293B]/60 font-medium">Verified Reviews ★★★★★</p>
          </div>
        </div>

        {/* Item 4 */}
        <div id="cred-serving" className="flex items-center gap-4 justify-center border-l-0 md:border-l border-[#1E293B]/10 md:pl-8">
          <div className="w-12 h-12 rounded-md bg-[#EAF6FC] flex items-center justify-center text-[#2b7dbd] shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xl md:text-2xl font-serif font-extrabold text-[#1E293B]">Since 2014</p>
            <p className="text-xs md:text-sm text-[#1E293B]/60 font-medium">Serving Vasai Families</p>
          </div>
        </div>

      </div>
    </div>
  );
}
