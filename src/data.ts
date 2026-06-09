import { Treatment, Review, TrustFactor, GalleryItem } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'smile-makeovers',
    title: 'Smile Makeovers',
    description: 'Transformative cosmetic design utilizing veneers, crowns, and laminates to design a balanced, healthy dental aesthetic.',
    fullDetails: 'Our smile makeovers combine cosmetic health with customized structural planning based on individual teeth shape, bite, and jaw symmetry. We address chipped, stained, or misaligned teeth using high-grade biocompatible porcelain for natural light-reflection and durability.',
    benefit: 'Achieve perfect dental balance and a highly confident smile.',
    duration: '2 - 3 visits over 10 days',
    costEstimate: 'Tailored on clinical consult',
    slug: 'smile-makeover-vasai',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Biocompatible permanent restorations replacing missing teeth while protecting surrounding bone structure and full chewing function.',
    fullDetails: 'Using high-precision implant systems, Dr. Shivanand Shetty places durable, biocompatible titanium posts that secure custom porcelain crowns. This prevents bone loss, preserves facial architecture, and restores 100% bite function.',
    benefit: 'Lifetime replacement of missing teeth with stable biological integration.',
    duration: '2 phases over 3 - 6 months',
    costEstimate: 'Structured on bone diagnostic',
    slug: 'dental-implants-vasai',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Virtually pain-free endodontic therapy designed to eliminate infection and salvage natural teeth using reciprocating rotary file systems.',
    fullDetails: 'Gone are the days of painful, multiple root canal sessions. Our clinic utilizes computerized rotary files, apex locators, and warm obturation systems to disinfect and seal root canals in a single, comfortable session.',
    benefit: 'Immediate pain relief while safely saving your natural teeth.',
    duration: 'Single sitting (45 - 60 mins)',
    costEstimate: 'Painless rotary RCT standards',
    slug: 'root-canal-treatment-vasai',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SPjeMz-B1BvYng_FfrOjxBqFtgsFDAva'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Safe, clinically-monitored professional bleaching sessions that reverse years of discoloration in one appointment.',
    fullDetails: 'We use gentle, pH-balanced clinical whitening gels activated by specialized wave energy to minimize root sensitivity while lifting up to 8 shades in less than an hour.',
    benefit: 'Quick, clinically clean results for deep food, tea, or age discoloration.',
    duration: '1 appointment (45 mins)',
    costEstimate: 'Immediate clinical-grade shade lift',
    slug: 'teeth-whitening-vasai',
    imageUrl: 'https://images.unsplash.com/photo-1473445711224-3762b24104c1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dentures',
    title: 'Dentures',
    description: 'Lightweight partial or full dental custom prosthetics engineered to restore active eating, clear speech, and natural aesthetics.',
    fullDetails: 'We build medical-grade, highly precise acrylic and flexible dentures customized to fit the natural contours of your gums and bite. This restores comfort, improves digestive chewing habits, and prevents jaw collapse.',
    benefit: 'Affordable, removable, multi-teeth restorations with comfortable custom-molded fit.',
    duration: '2 - 4 visits custom shaping',
    costEstimate: 'Bespoke prosthetic materials',
    slug: 'dentures-treatment-vasai',
    imageUrl: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Aligners',
    description: 'Invisible clear aligner systems and comfortable low-friction braces for perfect teeth alignment of patients of all age groups.',
    fullDetails: 'We offer advanced customized invisible orthodontic aligners alongside self-ligating ceramic braces. Backed by 3D planning scans, you can preview your final teeth alignment dynamically in real-time.',
    benefit: 'Clear, removable correction options matching responsive everyday routines.',
    duration: '6 - 18 months planned alignment',
    costEstimate: 'Flexible clinical-progress payment programs',
    slug: 'braces-treatment-vasai',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Hygienic dental cleanings (scaling), tooth-colored fillings, gentle extractions, and critical routine diagnostics.',
    fullDetails: 'Continuous dental wellness builds a beautiful smile. We offer professional ultrasonic scaling, composite tooth-colored fillings, painless extractions for wisdom teeth, and pediatric checkups for Vasai families.',
    benefit: 'Prevents complex decay and identifies latent issues early.',
    duration: '30 - 45 minutes',
    costEstimate: 'Hygienic preventative pricing',
    slug: 'dentist-in-vasai-west',
    imageUrl: 'https://lh3.googleusercontent.com/d/1es0c9N8Y9uiWTy2idNBYdzZLlqOm_xTM'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-qatar',
    author: 'Aishwarya Shetty',
    role: 'Travelled from Qatar',
    rating: 5,
    timeAgo: '11 months ago',
    text: 'I traveled all the way from Qatar to Vasai for my smile design here! Dr. Shivanand did several procedures meticulously and promptly, with the latest tools and tech.',
    fullBody: 'I traveled all the way from Qatar to Vasai for my dental service here! I needed to get smile re-designing and several dental procedures in a short span of time. Dr. Shivanand did it meticulously and promptly, with the latest tools and tech, and at a reasonable price. Six root canals in one day and I had ZERO pain after. I feel confident when I smile and could not have asked for more.',
    tag: 'Smile Makeover'
  },
  {
    id: 'rev-best',
    author: 'Navneet Palav',
    role: 'Local Guide',
    rating: 5,
    timeAgo: '6 months ago',
    text: 'Dr. Shivanand is the best in the business. I have been visiting him since 2 years now and the care and comfort at which he performs his actions is truly commendable.',
    fullBody: 'Dr. Shivanand is the best in the business. I have been visiting him since 2 years now and the care and comfort at which he performs his actions is truly commendable. I highly recommend him for every tooth problem that ever exists.',
    tag: 'Trusted Care'
  },
  {
    id: 'rev-tech',
    author: 'Aisha Singh',
    role: 'Local Guide',
    rating: 5,
    timeAgo: '4 years ago',
    text: 'Dr. Shivanand is a young and smart man who makes use of new techniques unlike other old school ways. He takes efforts to explain the whole treatment and alternatives.',
    fullBody: 'He is great with your appointment adjustments with your preference. Dr. Shivanand is a young and smart man who makes use of the new techniques unlike other old school ways. He takes efforts to explain the whole treatment and alternatives.',
    tag: 'Modern Techniques'
  },
  {
    id: 'rev-family',
    author: 'Sachin Jakhwal',
    role: 'Patient of 10 Years',
    rating: 5,
    timeAgo: '3 years ago',
    text: 'Dr. Shivanand is very professional when it comes to work. My family has been taking treatment (Implant, Braces, Root canal, Extraction) from him for the last 9-10 years.',
    fullBody: 'My family has been taking treatment (Implant, Braces, Root canal, Extraction, Dentures) from him for the last 9-10 years and have always been extremely satisfied with his high professionalism.',
    tag: 'Family Dentist'
  },
  {
    id: 'rev-painless',
    author: 'Yaseen Effendi',
    role: 'Local Guide',
    rating: 5,
    timeAgo: '2 years ago',
    text: 'Dr. Shetty is amazing, caring and a thorough professional. He made the treatment easy and less painful since I was doing a root canal here.',
    fullBody: 'Dr. Shetty is amazing, caring and a thorough professional. He made the treatment easy and less painful since I was doing a root canal. If in Vasai and anyone needs dental care, Dr. Shetty and his entire Pristine Dental Care team should be your choice.',
    tag: 'Painless RCT'
  },
  {
    id: 'rev-hygiene',
    author: 'Pankaj Dhiria',
    role: 'Local Guide',
    rating: 5,
    timeAgo: '2 years ago',
    text: 'Caters to patients of any age group with utmost ease and comfort. Clinic is very well managed, hygienic with all the modern equipment.',
    fullBody: 'Caters to patients of any age group with utmost ease and comfort. Clinic is very well managed, hygienic with all the modern equipment availability. Smiling front desk and helping staff make you feel comfortable throughout the process.',
    tag: 'Hygiene & Comfort'
  }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: 'trust-tech',
    title: 'Modern Technology',
    description: 'Equipped with quiet state-of-the-art endodontic rotary units, high-definition intraoral sensors, and digital imaging for pinpoint diagnostics.'
  },
  {
    id: 'trust-exp',
    title: 'Experienced Specialists',
    description: 'Led by veteran clinician Dr. Shivanand Shetty, combining over a decade of continuous mastery in cosmetic dental design and micro-dentistry.'
  },
  {
    id: 'trust-plan',
    title: 'Personalized Solutions',
    description: 'Treatment paths designed entirely around your specific biological needs, financial alignment, and ultimate comfort preferences.'
  },
  {
    id: 'trust-hyg',
    title: 'Hygienic Environment',
    description: 'Strict, multi-layered sterilization protocols exceeding standard regulations, ensuring complete safety for your loved ones.'
  },
  {
    id: 'trust-comfort',
    title: 'Comfort-Focused Care',
    description: 'Anxiety-free treatments designed specifically to eliminate pain, featuring a compassionate nursing staff and standard sedation aids.'
  },
  {
    id: 'trust-trans',
    title: 'Transparent Consultations',
    description: 'We believe in clinical integrity. Gain full, clear insights into every treatment alternative with zero surprise costs.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-entrance',
    title: 'Clinic Entrance & Ambience',
    description: 'Welcome to a warm, clutter-free space designed to calm our patients.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1es0c9N8Y9uiWTy2idNBYdzZLlqOm_xTM',
    category: 'clinic'
  },
  {
    id: 'gal-operating',
    title: 'Sterilized Operating Suites',
    description: 'State-of-the-art operatory with ergonomic chairs and advanced rotary systems.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SPjeMz-B1BvYng_FfrOjxBqFtgsFDAva',
    category: 'treatment'
  },
  {
    id: 'gal-equipment',
    title: 'Modern Micro-Dentistry tools',
    description: 'Latest digital imaging equipment ensuring precision, speed, and safety.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', // High end equipment
    category: 'equipment'
  },
  {
    id: 'gal-lounge',
    title: 'Premium Patient Lounge',
    description: 'Spacious wait lounge styled with calm neutral tones and soft hospitality lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', // Beautiful contemporary lounge
    category: 'lounge'
  }
];

export const GOOGLE_DRIVE_PHOTOS = {
  doctorProfile: 'https://lh3.googleusercontent.com/d/1EO4ZEGipMwin6ASAcQVf1bkIrnNags66',
  clinicEntrance: 'https://lh3.googleusercontent.com/d/1es0c9N8Y9uiWTy2idNBYdzZLlqOm_xTM',
  doctorOperating: 'https://lh3.googleusercontent.com/d/1SPjeMz-B1BvYng_FfrOjxBqFtgsFDAva',
  doctorUniform: 'https://lh3.googleusercontent.com/d/147gm-Sy0UPkQCMb7Ub75gtQQGpSkaTn6'
};
