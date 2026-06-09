import { useState } from 'react';
import { Maximize2, X, MapPin, CheckCircle } from 'lucide-react';
import { GOOGLE_DRIVE_PHOTOS } from '../data';

interface ClinicPhoto {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

export default function ClinicExperience() {
  const [selectedPhoto, setSelectedPhoto] = useState<ClinicPhoto | null>(null);

  const realClinicPhotos: ClinicPhoto[] = [
    {
      id: 'photo-entrance',
      title: 'Signage & Clinic Entrance',
      description: 'The elegant welcoming facade of Pristine Dental Care in Vasai West, Maharashtra.',
      url: GOOGLE_DRIVE_PHOTOS.clinicEntrance,
      category: 'Exterior',
    },
    {
      id: 'photo-operating',
      title: 'Our Clean Treatment Operatory',
      description: 'Equipped with computerized rotary systems, state-of-the-art dental chairs, and sterilization units.',
      url: GOOGLE_DRIVE_PHOTOS.doctorOperating,
      category: 'Treatment Room',
    },
    {
      id: 'photo-uniform',
      title: 'Hygienic Clinical Environment',
      description: 'Fully sterilized clinical setup designed around strict safety guidelines and patient hygiene.',
      url: GOOGLE_DRIVE_PHOTOS.doctorUniform,
      category: 'Clinic Interior',
    },
    {
      id: 'photo-doctor-headshot',
      title: 'Dr. Shivanand Shetty',
      description: 'Lead veteran dentist BDS, MDS Prosthodontist inside the dental surgery operatory.',
      url: GOOGLE_DRIVE_PHOTOS.doctorProfile,
      category: 'Lead Dentist',
    },
  ];

  return (
    <section
      id="clinic-experience"
      className="py-20 md:py-28 bg-[#F8FCFE] relative overflow-hidden px-6 md:px-12 border-b border-[#1E293B]/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#2B7DBD] uppercase font-bold block mb-3">
            Real Clinic Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Inside Pristine Dental Care
          </h2>
          <div className="w-16 h-[3px] bg-[#4CA7D8] mx-auto mt-4 rounded-full" />
          <p className="text-[#1E293B]/70 text-sm md:text-base leading-relaxed mt-4">
            A look inside our clinic and treatment environment. All images represent our real clinical setting in Vasai West.
          </p>
        </div>

        {/* Masonry Layout Grid using 100% Real Authentic Photos */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {realClinicPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="break-inside-avoid relative rounded-md overflow-hidden border border-[#1E293B]/10 cursor-pointer shadow-xs hover:shadow-md group bg-white transition-all duration-300"
            >
              {/* Image Element */}
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-101"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                }}
              />

              {/* Cover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Overlay textual metrics */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end">
                <span className="font-mono text-[9px] tracking-widest text-[#4CA7D8] uppercase font-extrabold block mb-1.5">
                  {photo.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold">
                    {photo.title}
                  </h3>
                  <div className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 ml-4">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-white/70 text-xs mt-2 font-normal line-clamp-2 max-w-[90%]">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Preview popup */}
        {selectedPhoto && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="max-w-4xl w-full relative flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 bg-white/15 hover:bg-white/25 text-white w-10 h-10 rounded-md flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[75vh] max-w-full object-contain rounded-md border border-white/10 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                }}
              />

              <div className="text-center text-white mt-4 max-w-xl">
                <span className="font-mono text-xs text-[#4CA7D8] font-bold uppercase tracking-widest">{selectedPhoto.category}</span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1">{selectedPhoto.title}</h4>
                <p className="text-white/75 text-sm mt-2">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
