import React from 'react';
import { PageId } from '../types/index';
import { ACADEMY_INFO, BRAND_ASSETS } from '../data/coursesData';
import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white p-0.5 shrink-0">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="Aadhi Hindi Coaching Center"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {ACADEMY_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Personalized Hindi coaching for school students, professionals, and language
              enthusiasts across all 8 examination levels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Pages</p>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white">
                  Exam Levels (8 Levels)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('contact-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-xs">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Contact</p>
            <div className="space-y-1.5 text-slate-400">
              <a
                href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{ACADEMY_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${ACADEMY_INFO.secondaryPhoneRaw}`}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono">{ACADEMY_INFO.secondaryPhone}</span>
              </a>
              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white pt-1"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Google Maps Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} {ACADEMY_INFO.name}. All rights reserved.</p>
          <a
            href={ACADEMY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            Find us on Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
};
