import React, { useState } from 'react';
import { PageId } from '../types/index';
import { ACADEMY_INFO, BRAND_ASSETS } from '../data/coursesData';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Exam Levels' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'contact') {
      onNavigate('home');
      setMobileMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById('contact-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    onNavigate(id as PageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
        {/* Brand Wordmark with Swappable Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-hidden group"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-slate-200 shrink-0">
            <img
              src={BRAND_ASSETS.logo}
              alt="Aadhi Hindi Coaching Center Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors block leading-tight">
              Aadhi Hindi Coaching Center
            </span>
          </div>
        </button>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                currentPage === link.id
                  ? 'text-blue-900 font-semibold bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Clean Single Action */}
        <div className="flex items-center gap-2.5">
          <a
            href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
              ACADEMY_INFO.whatsappPrefill
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3" />
            <span>Call</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-lg font-medium ${
                currentPage === link.id
                  ? 'bg-blue-50 text-blue-900 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <a
              href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(
                ACADEMY_INFO.whatsappPrefill
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-blue-900 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>{ACADEMY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
