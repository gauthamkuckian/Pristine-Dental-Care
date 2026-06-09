import {
  Cpu,
  UserCheck,
  ShieldCheck,
  Heart,
  FileText,
  Laptop,
} from 'lucide-react';

export default function WhyTrust() {
  const whyPoints = [
    {
      id: 'why-advanced-equip',
      title: 'Advanced Equipment',
      description: 'Equipped with computerized endodontic rotary units, digital scaling instrumentation, and electronic Apex locators.',
      icon: <Cpu className="w-6 h-6 text-[#2B7DBD]" />,
    },
    {
      id: 'why-specialist',
      title: 'Experienced Specialist',
      description: 'Led by Dr. Shivanand Shetty, who holds a specialized Masters degree (MDS) in Prosthodontics, ensuring surgical precision.',
      icon: <UserCheck className="w-6 h-6 text-[#2B7DBD]" />,
    },
    {
      id: 'why-sterile',
      title: 'Strict Sterilization Protocols',
      description: 'Multi-tiered biochemical sterilization procedures. We sanitize all machinery and equipment strictly between appointments.',
      icon: <ShieldCheck className="w-6 h-6 text-[#2B7DBD]" />,
    },
    {
      id: 'why-comfort',
      title: 'Patient Comfort Focused',
      description: 'Designed from the ground up for zero pain. Enjoy anxiety-free treatment protocols with compassionate nursing support.',
      icon: <Heart className="w-6 h-6 text-[#2B7DBD]" />,
    },
    {
      id: 'why-transparent',
      title: 'Transparent Treatment Planning',
      description: 'We believe in clinical ethics. No surprise charges. We draft all cost metrics and visual alternatives honestly.',
      icon: <FileText className="w-6 h-6 text-[#2B7DBD]" />,
    },
    {
      id: 'why-modern-tech',
      title: 'Modern Dental Technology',
      description: 'Leveraging digital smile modeling, lightweight restorative fillers, and high-definition smart dental sensors.',
      icon: <Laptop className="w-6 h-6 text-[#2B7DBD]" />,
    },
  ];

  return (
    <section
      id="why-trust"
      className="py-20 md:py-28 bg-[#F8FCFE] relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block mb-3">
            Pristine Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Why Choose Pristine Dental Care
          </h2>
          <div className="w-16 h-[3px] bg-[#4CA7D8] mx-auto mt-4 rounded-full" />
          <p className="text-[#1E293B]/70 text-sm md:text-base leading-relaxed mt-4">
            Our clinical systems are designed for extreme safety, surgical longevity, and absolute comfort.
          </p>
        </div>

        {/* 3x2 Clinical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPoints.map((point) => (
            <div
              key={point.id}
              className="bg-white p-8 rounded-md border border-[#1E293B]/10 hover:border-[#4CA7D8] shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-[#EAF6FC] rounded-md flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#1E293B] mb-3">
                  {point.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#1E293B]/70 text-sm leading-relaxed font-sans">
                  {point.description}
                </p>
              </div>

              {/* Minimalist Bottom Indicator Accent */}
              <div className="w-8 h-[2px] bg-[#4CA7D8] mt-6" />
            </div>
          ))}
        </div>

        {/* Brand Promise highlight */}
        <div className="mt-16 p-8 md:p-12 rounded-md bg-[#EAF6FC] border border-[#2B7DBD]/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <h4 className="font-serif text-xl font-bold text-[#2B7DBD] mb-2">
              Our Clinical Integrity Promise
            </h4>
            <p className="text-[#1E293B]/70 text-sm leading-relaxed">
              We never recommend unneeded dental procedures. We always detail all diagnostics in everyday terms, and prioritize your family's health and comfort above all else.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <a
              href="#appointment"
              className="inline-block w-full lg:w-auto text-center bg-[#2B7DBD] text-white hover:bg-[#1f5f94] text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-md shadow-sm transition-all duration-200"
            >
              Schedule Appointment
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
