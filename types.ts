export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  kgLost: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: 'leaf' | 'scale' | 'clock' | 'heart' | 'book' | 'video';
}
