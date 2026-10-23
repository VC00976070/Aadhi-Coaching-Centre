export type PageId = 'home' | 'about' | 'courses';

export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  levelInterested: string;
  message?: string;
}
