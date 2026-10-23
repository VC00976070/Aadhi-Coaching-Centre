import React from 'react';
import { ACADEMY_INFO } from '../data/coursesData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-40">
      <a
        href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
          ACADEMY_INFO.whatsappPrefill
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-lg transition-all active:scale-95 group text-xs font-semibold"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </aside>
  );
};
