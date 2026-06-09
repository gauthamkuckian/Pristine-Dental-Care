export interface Treatment {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  benefit: string;
  duration: string;
  costEstimate: string;
  slug: string;
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  timeAgo: string;
  text: string;
  fullBody?: string;
  tag?: string;
}

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'clinic' | 'equipment' | 'treatment' | 'lounge';
}
